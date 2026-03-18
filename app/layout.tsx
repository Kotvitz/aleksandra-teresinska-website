import type { Metadata } from "next";
import "./globals.css";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import ScrollToTopButton from "./src/components/ui/ScrollToTopButton";
import CookieSettingsButton from "./src/components/ui/CookieSettingsButton";
import ConsentScripts from "./src/components/cookies/ConsentScripts";

export const metadata: Metadata = {
  title: "Aleksandra Teresińska | Nowa Nadzieja",
  description: "Strona oficjalna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <ScrollToTopButton />
        <CookieSettingsButton />
        <ConsentScripts />
        <Footer />
      </body>
    </html>
  );
}