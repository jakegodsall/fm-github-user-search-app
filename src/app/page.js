import Image from "next/image";
import AccountCard from "./components/AccountCard/AccountCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <main className="flex max-w-[33rem] flex-col items-center sm:w-[80%] sm:max-w-none md:max-w-[73rem]">
                <div className="mb-[3.6rem] mt-[3.1rem] w-full sm:mt-[10rem]">
                    <Header />
                </div>
                <div className="mb-[2.4rem] w-full">
                    <SearchBar />
                </div>
                <div className="w-full">
                    <AccountCard />
                </div>
            </main>
        </div>
    );
}
