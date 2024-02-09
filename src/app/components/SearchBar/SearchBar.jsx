import Image from "next/image";

import Card from "../UI/Card";

import searchIcon from "@assets/icon-search.svg";
import Button from "../UI/Button";

export default function SearchBar() {
    return (
        <Card>
            <form className="flex w-full items-center justify-between gap-[0.8rem] px-[1.8rem] py-[0.7rem]">
                <div className="flex items-center  gap-[0.9rem] sm:gap-[2.3rem]">
                    <Image src={searchIcon} width="20" height="20" />
                    <input
                        className="py-[1.8rem] text-[1.3rem] text-[#4B6A9B] focus:outline-none"
                        type="text"
                        placeholder="Search GitHub username..."
                    />
                </div>
                <Button>Search</Button>
            </form>
        </Card>
    );
}
