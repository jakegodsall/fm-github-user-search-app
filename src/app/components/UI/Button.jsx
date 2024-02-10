export default function Button({ children }) {
    return (
        <button className="rounded-2xl bg-mainBlue px-[1.6rem] py-[1.2rem] text-[1.4rem] font-bold text-white sm:text-[1.6rem]">
            {children}
        </button>
    );
}
