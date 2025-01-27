"use client";
import Link from "next/link";
import { Inknut_Antiqua } from "next/font/google";
import { navLinks } from "@/constants";
import { MobileNavbar } from "./MobileNavbar";
import { usePathname } from "next/navigation";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Header = ({
	bgColor = "#ff0000",
	color = "#414141",
}: {
	bgColor?: string;
	color?: string;
}) => {
	const pathname = usePathname();
	return (
		<header className={` ${color} py-8 z-50`}>
			<div className="container flex items-center justify-between gap-2">
				<h3
					className={`uppercase text-xl lg:text-2xl font-semibold ${inknut_Antiqua.className}`}
				>
					<Link href="/">Seye Olurotimi</Link>
				</h3>
				<nav className="hidden md:flex">
					<ul className="flex items-center justify-center gap-4">
						{navLinks.map(({ title, route }, index) => (
							<Link
								key={index}
								className={`uppercase text-xs lg:text-sm font-medium  ${
									pathname === "/" &&
									"text-white border-gray-200"
								} px-2 pb-2 hover:border-b-2`}
								href={route}
							>
								{title}
							</Link>
						))}
					</ul>
				</nav>
				<div className="md:hidden">
					<MobileNavbar />
				</div>
			</div>
		</header>
	);
};

export default Header;
