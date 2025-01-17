import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Seye Olurotimi - Entrepreneur, MSME Africa, Business Coach",
	description:
		"Discover the official website of Seye Olurotimi – a renowned entrepreneur, MSME advocate, and speaker. Explore his inspiring journey, business insights, projects, and daily updates. Connect for consultations, speaking engagements, and collaborations.",
	keywords:
		"Seye Olurotimi, MSME Africa, Cedar Tribe, Entreprenuer, Business consultant, Seye Olurotimi official website, MSME advocate Nigeria, Business coach Seye Olurotimi, Public speaker Nigeria, Business consultant, SME advocacy, Business mentorship, Entrepreneurship in Nigeria, Business speaker Seye Olurotimi, SME conference speaker, Featured businesses by Seye Olurotimi, Keynote speaker for MSMEs, Nigerian motivational speaker, how to grow an SME in Nigeria",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
