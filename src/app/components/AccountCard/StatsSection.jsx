export default function StatsSection({ public_repos, followers, following }) {
    return (
        <div className="flex justify-center gap-[2rem] rounded-lg bg-background p-4 text-center sm:justify-between sm:gap-0 sm:px-[3.2rem]">
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B] sm:text-[1.3rem]">
                    Repos
                </p>
                <p className="text-[1.6rem] font-bold sm:text-[2.2rem]">
                    {public_repos}
                </p>
            </div>
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B] sm:text-[1.3rem]">
                    Followers
                </p>
                <p className="text-[1.6rem] font-bold sm:text-[2.2rem]">
                    {followers}
                </p>
            </div>
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B] sm:text-[1.3rem]">
                    Following
                </p>
                <p className="text-[1.6rem] font-bold sm:text-[2.2rem]">
                    {following}
                </p>
            </div>
        </div>
    );
}
