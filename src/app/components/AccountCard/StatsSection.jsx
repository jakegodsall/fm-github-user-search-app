export default function StatsSection() {
    return (
        <div className="flex justify-center gap-8 rounded-lg bg-background p-4 text-center">
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B]">Repos</p>
                <p className="text-[1.6rem] font-bold">8</p>
            </div>
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B]">Followers</p>
                <p className="text-[1.6rem] font-bold">3938</p>
            </div>
            <div>
                <p className="text-[1.1rem] text-[#4B6A9B]">Following</p>
                <p className="text-[1.6rem] font-bold">9</p>
            </div>
        </div>
    );
}
