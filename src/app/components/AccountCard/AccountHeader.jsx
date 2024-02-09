import Image from "next/image";

import sunIcon from "@assets/icon-sun.svg";

export default function AccountHeader() {
    return (
        <div className="flex items-center gap-[2rem] sm:relative">
            <Image
                className="h-[11.7rem] w-[11.7rem] rounded-full bg-fuchsia-500 sm:absolute  sm:translate-x-[-150%] sm:translate-y-[30%]"
                src={sunIcon}
                width="70"
                height="70"
            />
            <div>
                <p className="text-[1.6rem] font-bold">The Octocat</p>
                <p className="text-[1.3rem] text-mainBlue">@octocat</p>
                <p className="text-[1.3rem] text-[#697c9a]">
                    Joined 25 Jan 2011
                </p>
            </div>
        </div>
    );
}
