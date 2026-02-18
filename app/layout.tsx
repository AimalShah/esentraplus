import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NewsLetter from "@/components/newsletter";
import Reveal from "@/components/Reveal";

const workSans = Work_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESENTRA+",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${unbounded.variable} antialiased bg-background font-sans`}
      >
        {/*<Reveal />*/}
        {/*<Header />*/}
        {children}
        <NewsLetter />
      </body>
    </html>
  );
}
