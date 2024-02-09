import Image from "next/image";

import locationIcon from "@assets/icon-location.svg";
import websiteIcon from "@assets/icon-website.svg";
import twitterIcon from "@assets/icon-twitter.svg";
import companyIcon from "@assets/icon-company.svg";

export default function SocialsSection() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={locationIcon} alt="location" />
                <p className="text-[1.3rem] text-[#4b6a9b]">San Francisco</p>
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={websiteIcon} alt="website" />
                <p className="text-[1.3rem] text-[#4b6a9b]">
                    https://github.com/blog
                </p>
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={twitterIcon} alt="twitter" />
                <p className="text-[1.3rem] text-[#4b6a9b]">Not Available</p>
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={companyIcon} alt="company" />
                <p className="text-[1.3rem] text-[#4b6a9b]">@github</p>
            </div>
        </div>
    );
}
