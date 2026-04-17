import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FooterCTA from "@/components/Footer";
import SiteLoadingScreen from "@/components/SiteLoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mulish = localFont({
  src: "../public/fonts/Mulish,Plus_Jakarta_Sans/Mulish/Mulish-VariableFont_wght.ttf",
  variable: "--font-mulish",
  display: "swap",
});

const jakartaSans = localFont({
  src: "../public/fonts/Mulish,Plus_Jakarta_Sans/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-jakarta",
  display: "swap",
});

const nunito = localFont({
  src: "../public/fonts/Nunito/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexiFire",
  description: "Create, Build, Grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${mulish.variable} ${jakartaSans.variable} ${nunito.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <div className="relative z-[100]">
          <NavBar />
        </div>
        <SiteLoadingScreen />
        {children}
        <FooterCTA />
      </body>
    </html>
  );
}
