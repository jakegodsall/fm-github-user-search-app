"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";

import sunIcon from "@assets/icon-sun.svg";
import moonIcon from "@assets/icon-moon.svg";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState();

    useEffect(() => {
        setIsDark(theme === "dark");
    }, []);

    const handleClick = () => {
        setIsDark(!isDark);

        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className="flex items-center gap-[1.6rem]" onClick={handleClick}>
            {isDark && (
                <>
                    <p className="text-textMain] text-[1.3rem] font-bold uppercase">
                        Light
                    </p>
                    <Image src={sunIcon} alt="moon" width="20" height="20" />
                </>
            )}
            {!isDark && (
                <>
                    <p className="text-textMain text-[1.3rem] font-bold uppercase">
                        Dark
                    </p>
                    <Image src={moonIcon} alt="moon" width="20" height="20" />
                </>
            )}
        </div>
    );
}
