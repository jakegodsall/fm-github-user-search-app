import Image from "next/image";

import sunIcon from "@assets/icon-sun.svg";
import moonIcon from "@assets/icon-moon.svg";

export default function ThemeSwitcher() {
    return (
        <div className="flex items-center gap-[1.6rem]">
            <p className="text-[1.3rem] font-bold uppercase">Dark</p>
            <Image src={moonIcon} alt="moon" width="20" height="20" />
        </div>
    );
}
