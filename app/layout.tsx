import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import AudioProvider from "@/lib/components/audioprovider";
import { SoundProvider } from "@/lib/context/AudioContext";
import Decor from "@/lib/components/dateTime";

import Logo from "@/lib/components/logo";

import SideMenu from "@/lib/components/sideNav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitch Deck",
  description: "A simple application to showcase a brand and work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <SoundProvider>
          <Analytics />
          <Logo />
          <AudioProvider />
          <SideMenu />
          {children}
          <Decor />
        </SoundProvider>
      </body>
    </html>
  );
}
