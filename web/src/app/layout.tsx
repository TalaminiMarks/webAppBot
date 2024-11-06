import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aglo",
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
    <html lang="pt">
      <body className="w-full px-[10%] flex flex-col items-center justify-cente">
        {children}
      </body>
    </html>
  );
}
