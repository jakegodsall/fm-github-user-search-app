"use client";

import { useState, useEffect } from "react";

import AccountCard from "./components/AccountCard/AccountCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

/**
 * Makes a GET request to the GitHub API to retrieve information about a user
 * @param {string} username - The username of the GitHub user
 * @returns {object} The user data from the GitHub API
 */
async function getGithubUser(username = "octocat") {
    // Default to "octocat" if no username is provided

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        throw new Error(`GitHub user not found: ${username}`);
    }

    const userData = await response.json();
    return userData;
}

export default function Home() {
    const [githubUser, setGithubUser] = useState({
        username: "",
    });
    const [githubUserData, setGithubUserData] = useState();
    const [userFound, setUserFound] = useState(true);

    useEffect(() => {
        // Fetch data for "octocat" on initial load, or the provided username if it changes
        const username = githubUser.username || "octocat";
        getGithubUser(username)
            .then((result) => {
                setUserFound(true);
                setGithubUserData(result);
            }) // Directly use setGithubUserData
            .catch((error) => {
                console.error("Failed to fetch GitHub user data:", error),
                    setUserFound(false);
            });
    }, [githubUser.username]);

    return (
        <div className="flex flex-col items-center">
            <main className="flex max-w-[33rem] flex-col items-center sm:w-[80%] sm:max-w-none md:max-w-[73rem]">
                <div className="mb-[3.6rem] mt-[3.1rem] w-full sm:mt-[10rem]">
                    <Header />
                </div>
                <div className="mb-[2.4rem] w-full">
                    <SearchBar
                        githubUser={githubUser}
                        setGithubUser={setGithubUser}
                        userFound={userFound}
                    />
                </div>
                <div className="w-full">
                    <AccountCard githubUserData={githubUserData} />
                </div>
            </main>
        </div>
    );
}
