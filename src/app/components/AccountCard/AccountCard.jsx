import Card from "../UI/Card";
import AccountHeader from "./AccountHeader";
import SocialsSection from "./SocialsSection";
import StatsSection from "./StatsSection";

export default function AccountCard({ githubUser }) {
    console.log("from card: " + githubUser.username);

    return (
        <Card>
            <div className="p-[2.4rem] sm:p-[4rem] lg:ml-[18rem] lg:p-[4.8rem]">
                <div className="mb-[3.4rem]">
                    <AccountHeader />z
                </div>
                <p className="mb-[2.4rem] text-[1.3rem] text-textMain sm:text-[1.5rem] md:mb-[3rem]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.
                </p>
                <div className="mb-[2.4rem] md:mb-[3.7rem]">
                    <StatsSection />
                </div>
                <SocialsSection />
            </div>
        </Card>
    );
}
