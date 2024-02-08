import Card from "./Card";
import SocialsSection from "./SocialsSection";
import StatsSection from "./StatsSection";

export default function AccountCard() {
    return (
        <Card>
            <div className="p-12">
                <div></div>
                <p className="mb-[2.4rem] text-[1.3rem]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.
                </p>
                <div className="mb-[2.4rem]">
                    <StatsSection />
                </div>
                <SocialsSection />
            </div>
        </Card>
    );
}
