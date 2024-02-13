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
                <p className="text-textMain text-[1.3rem] ">San Francisco</p>
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={websiteIcon} alt="website" />
                <p className="text-textMain text-[1.3rem] ">
                    https://github.com/blog
                </p>
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={twitterIcon} alt="twitter" />
                <p className="text-textMain text-[1.3rem] ">Not Available</p>
            </div>
            <div className="grid grid-cols-[4rem,_1fr]">
                <Image src={companyIcon} alt="company" />
                <p className="text-textMain text- text-[1.3rem]">@github</p>
            </div>
        </div>
    );
}
