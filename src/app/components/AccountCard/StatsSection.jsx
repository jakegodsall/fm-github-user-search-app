export default function StatsSection() {
    return (
        <div className="flex justify-center gap-[2rem] rounded-lg bg-background p-4 text-center sm:justify-between sm:gap-0 sm:px-[3.2rem]">
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B] sm:text-[1.3rem]">
                    Repos
                </p>
                <p className="text-[1.6rem] font-bold sm:text-[2.2rem]">8</p>
            </div>
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B] sm:text-[1.3rem]">
                    Followers
                </p>
                <p className="text-[1.6rem] font-bold sm:text-[2.2rem]">3938</p>
            </div>
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B] sm:text-[1.3rem]">
                    Following
                </p>
                <p className="text-[1.6rem] font-bold sm:text-[2.2rem]">9</p>
            </div>
        </div>
    );
}
