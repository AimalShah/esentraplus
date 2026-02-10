import "./globals.css";
import { Alegreya } from "next/font/google";

export const metadata = {
	title: "ESENTRAPLUS",
	description: "A skincare products company.",
};

const alegreya = Alegreya({
	weight: ["400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-alegreya",
});

import Header from "@/components/Header";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${alegreya.variable} font-mori`}>
				<div className="" />
				{children}
			</body>
		</html>
	);
}
