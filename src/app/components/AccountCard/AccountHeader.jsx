import Image from "next/image";

import sunIcon from "@assets/icon-sun.svg";

export default function AccountHeader({ avatar_url, name, login, created_at }) {
    return (
        <div className="flex w-full items-center gap-[2rem] sm:relative">
            <Image
                className="z-10 h-[11.7rem] w-[11.7rem] rounded-full bg-fuchsia-500 sm:mr-[4.1rem] lg:absolute lg:left-[-17em] lg:top-[2rem]"
                src={avatar_url}
                width="70"
                height="70"
                alt="sun"
                priority={true}
            />
            <div className="w-full">
                <div className="flex flex-row items-center justify-between">
                    <p className="w-full text-[1.6rem] font-bold sm:text-[2.6rem]">
                        {name}
                    </p>
                    <p className="hidden w-full text-right text-[1.3rem] text-textMain sm:text-[1.5rem] lg:block">
                        {created_at}
                    </p>
                </div>
                <p className="text-[1.3rem] text-mainBlue sm:text-[1.6rem]">
                    @{login}
                </p>
                <p className="text-[1.3rem] text-textMain sm:text-[1.5rem] lg:hidden">
                    {created_at}
                </p>
            </div>
        </div>
    );
}
