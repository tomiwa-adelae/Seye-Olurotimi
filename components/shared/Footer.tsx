import { Inknut_Antiqua } from "next/font/google";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer
			className={`${inknut_Antiqua.className} font-semibold bg-green-400 py-8 uppercase text-xs text-white text-center`}
		>
			&copy; Seye Olurotimi {year}. All rights reserved
		</footer>
	);
};

export default Footer;
