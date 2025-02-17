import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Inknut_Antiqua } from "next/font/google";
import { ImageLibrary } from "@/components/shared/ImageLibrary";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Spotlight = () => {
	const images = [
		{ src: "/assets/images/seye-olurotimi.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
		{ src: "/assets/images/seye-olurotimi.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
	];

	return (
		<div className="bg-white text-black pb-16 pt-4 container">
			<SectionTitle title="Spotlight Moments" subTitle="Who I am" />
			<div className="mt-8">
				<div>
					<ImageLibrary images={images} />
				</div>
				<div className="rounded-3xl mt-8 py-6 px-6 bg-green-400 text-white flex items-center justify-between flex-col sm:flex-row gap-5">
					<h4
						className={`font-semibold text-lg lg:text-lg ${inknut_Antiqua.className}`}
					>
						Want to see more moments?
					</h4>
					<Button
						className="w-full sm:w-auto"
						variant={"secondary"}
						size={"lg"}
						asChild
					>
						<Link href="/gallery">Visit my gallery</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Spotlight;
