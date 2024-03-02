import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Card from "../UI/Card";

import searchIcon from "@assets/icon-search.svg";
import Button from "../UI/Button";

export default function SearchBar({ githubUser, setGithubUser, userFound }) {
    function onSubmitHandler(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        setGithubUser(data);
    }

    return (
        <Card>
            <form
                onSubmit={onSubmitHandler}
                className="flex w-full items-center justify-between px-[0.7rem] py-[0.7rem] sm:px-[1.8rem]"
            >
                <div className="relative flex items-center gap-[0.9rem] sm:gap-[2.3rem]">
                    <Image
                        src={searchIcon}
                        width="20"
                        height="20"
                        alt="magnifying glass"
                        className="h-[2rem] w-[2rem]"
                    />
                    <AnimatePresence>
                        {!userFound && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute right-[-1rem] bg-foreground px-[1rem] py-[1.8rem] text-[1.2rem] text-[#f74646]"
                            >
                                No results
                            </motion.p>
                        )}
                    </AnimatePresence>
                    <input
                        className="bg-inherit py-[1.8rem] text-[1.3rem] text-[#4B6A9B] placeholder:text-[#4B6A9B] focus:outline-none sm:w-[28rem] sm:text-[1.8rem]"
                        type="text"
                        placeholder="Search..."
                        name="username"
                    />
                </div>
                <Button>Search</Button>
            </form>
        </Card>
    );
}
