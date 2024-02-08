export default function Card({ children }) {
    return (
        <div className="w-4/5 rounded-lg bg-foreground shadow-sm">
            {children}
        </div>
    );
}
