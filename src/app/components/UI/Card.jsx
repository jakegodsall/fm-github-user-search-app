export default function Card({ children }) {
    return (
        <div className="w-full overflow-hidden rounded-3xl bg-foreground shadow-[0_5px_10px_-5px_rgba(0,0,0,0.5)]">
            {children}
        </div>
    );
}
