"use client";

import { useState, useEffect } from "react";

import Card from "../UI/Card";
import AccountHeader from "./AccountHeader";
import SocialsSection from "./SocialsSection";
import StatsSection from "./StatsSection";

export default function AccountCard({ githubUserData }) {
    if (!githubUserData) return null;

    return (
        <Card>
            <div className="p-[2.4rem] sm:p-[4rem] lg:ml-[18rem] lg:p-[4.8rem]">
                <div className="mb-[3.4rem]">
                    <AccountHeader
                        avatar_url={githubUserData.avatar_url}
                        name={githubUserData.name}
                        login={githubUserData.login}
                        created_at={githubUserData.created_at}
                    />
                </div>
                <p className="mb-[2.4rem] text-[1.3rem] text-textMain sm:text-[1.5rem] md:mb-[3rem]">
                    {githubUserData.bio}
                </p>
                <div className="mb-[2.4rem] md:mb-[3.7rem]">
                    <StatsSection
                        public_repos={githubUserData.public_repos}
                        followers={githubUserData.followers}
                        following={githubUserData.following}
                    />
                </div>
                <SocialsSection
                    location={githubUserData.location}
                    blog={githubUserData.blog}
                    twitter_username={githubUserData.twitter_username}
                    company={githubUserData.company}
                />
            </div>
        </Card>
    );
}
