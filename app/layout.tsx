import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NewsLetter from "@/components/newsletter";
import Footer from "@/components/footer";

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
  description: "Pure care for radiant skin",
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
        <Header />
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
