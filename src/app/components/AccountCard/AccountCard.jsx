"use client";

import { useState, useEffect } from "react";

import Card from "../UI/Card";
import AccountHeader from "./AccountHeader";
import SocialsSection from "./SocialsSection";
import StatsSection from "./StatsSection";

async function getGithubUser(username) {
    let res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
        res = await fetch("https://api.github.com/users/octocat");
    } else {
        return res.json();
    }
}

export default function AccountCard({ githubUser }) {
    const [githubUserData, setGithubUserData] = useState();

    useEffect(() => {
        getGithubUser("octocat").then((data) => setGithubUserData(data));
    }, []);

    useEffect(() => {
        getGithubUser(githubUser.username).then((data) =>
            setGithubUserData(data),
        );
    }, [githubUser]);

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
