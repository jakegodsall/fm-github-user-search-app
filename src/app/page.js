import Image from "next/image";
import AccountCard from "./components/AccountCard";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <AccountCard />
        </main>
    );
}
