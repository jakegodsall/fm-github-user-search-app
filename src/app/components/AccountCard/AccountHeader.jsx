import Image from "next/image";

import sunIcon from "@assets/icon-sun.svg";

export default function AccountHeader() {
    return (
        <div className="flex items-center gap-[2rem]">
            <Image
                src={sunIcon}
                width="70"
                height="70"
                className="rounded-full bg-fuchsia-500"
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
