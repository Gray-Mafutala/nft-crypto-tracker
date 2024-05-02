import type { Metadata } from "next";
import { poppins, techno_chain, tt_firs_neue } from "./fonts";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoonModal from "./components/ComingSoonModal.tsx";

export const metadata: Metadata = {
  title: "NFT Crypto Tracker",
  description:
    "Discover exclusive NFT collections, track and compare cryptocurrency prices in real-time.",
  icons: {
    icon: "/nft-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${techno_chain.variable} ${tt_firs_neue.variable} antialiased`}
    >
      <body className="mx-5">
        <Header />
        <ComingSoonModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
