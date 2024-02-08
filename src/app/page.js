import Image from "next/image";
import AccountCard from "./components/AccountCard/AccountCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

export default function Home() {
    return (
        <main className="flex flex-col items-center gap-[1.6rem]">
            <Header />
            <SearchBar />
            <AccountCard />
        </main>
    );
}
