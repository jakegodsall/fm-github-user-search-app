import Providers from "./providers";

import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "GitHub User Search App",
    description:
        "Jake Godsall's solution to the GitHub User Search App challenge from Frontend Mentor",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={spaceMono.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
