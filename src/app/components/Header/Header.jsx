import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="flex w-4/5 items-center justify-between py-[3.2rem]">
            <p className="text-[2.6rem] font-bold">Devfinder</p>
            <ThemeSwitcher />
        </header>
    );
}
