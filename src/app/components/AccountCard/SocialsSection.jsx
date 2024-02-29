import Image from "next/image";

import locationIcon from "@assets/icon-location.svg";
import blogIcon from "@assets/icon-website.svg";
import twitterIcon from "@assets/icon-twitter.svg";
import companyIcon from "@assets/icon-company.svg";

export default function SocialsSection({
    location,
    blog,
    twitter_username,
    company,
}) {
    const generateText = (text) => {
        if (text) {
            return <p className="text-[1.3rem] text-textMain ">{text}</p>;
        } else {
            return (
                <p className="text-[1.3rem] text-[#8e94a3]">Not Available</p>
            );
        }
    };

    return (
        <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={locationIcon} alt="location" />
                {generateText(location)}
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={blogIcon} alt="website" />
                {generateText(blog)}
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={twitterIcon} alt="twitter" />
                {generateText(twitter_username)}
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={companyIcon} alt="company" />
                {generateText(company)}
            </div>
        </div>
    );
}
