"use client";

import { useState, useEffect } from "react";

import Card from "../UI/Card";
import AccountHeader from "./AccountHeader";
import SocialsSection from "./SocialsSection";
import StatsSection from "./StatsSection";

/**
 * Makes a GET request to the GitHub API to retrieve information about a user
 * @param {string} username - The username of the GitHub user
 * @returns {object} The user data from the GitHub API
 */
async function getGithubUser(username = "octocat") {
    // Default to "octocat" if no username is provided
    const res = await fetch(`https://api.github.com/users/${username}`);
    return res.json();
}

export default function AccountCard({ githubUser }) {
    const [githubUserData, setGithubUserData] = useState();

    useEffect(() => {
        // Fetch data for "octocat" on initial load, or the provided username if it changes
        const username = githubUser.username || "octocat";
        getGithubUser(username)
            .then(setGithubUserData) // Directly use setGithubUserData
            .catch((error) =>
                console.error("Failed to fetch GitHub user data:", error),
            );
    }, [githubUser.username]);

    console.log(githubUserData);

    if (!githubUserData) return null;

    return (
        <Card>
            <div className="p-[2.4rem] sm:p-[4rem] lg:ml-[18rem] lg:p-[4.8rem]">
                <div className="mb-[3.4rem]">
                    <AccountHeader />
                </div>
                <p className="mb-[2.4rem] text-[1.3rem] text-textMain sm:text-[1.5rem] md:mb-[3rem]">
                    {githubUserData.bio}
                </p>
                <div className="mb-[2.4rem] md:mb-[3.7rem]">
                    <StatsSection />
                </div>
                <SocialsSection />
            </div>
        </Card>
    );
}
