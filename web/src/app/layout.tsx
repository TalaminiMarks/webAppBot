import type { Metadata } from "next";
import "./globals.css";
import { mulish } from "@/utils/fonts";

export const metadata: Metadata = {
    title: {
        default: "Mariko RPG",
        template: "%s | Mariko RPG"
    },
    description: "aglo pr acoloca na descricao",
    authors: [{name: "Marico", url: "Não tenho url"}],
    keywords: "algo, pra, ceo"

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" className={`${mulish.className} h-full`}>
            <body className="w-full h-full px-24 flex flex-col">
                {children}
            </body>
        </html>
    );
}
