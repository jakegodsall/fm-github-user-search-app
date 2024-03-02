import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between">
            <p className="select-none text-[2.6rem] font-bold">Devfinder</p>
            <ThemeSwitcher />
        </header>
    );
}
