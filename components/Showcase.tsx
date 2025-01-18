import Header from "./shared/Header";
import { Inknut_Antiqua } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Showcase = () => {
	return (
		<div
			style={{ backgroundImage: `url(/assets/images/showcase-img.jpg)` }}
			className="min-h-full text-white bg-no-repeat bg-center bg-cover bg-current"
		>
			<Header />
			<main className="grid grid-cols-1 md:grid-cols-5">
				<div className="container pb-2 md:pb-16 py-16 flex items-start flex-col justify-end col-span-3">
					<div className="space-y-6 w-full">
						<h4 className="font-semibold text-xl md:text-2xl text-gray-100 ">
							I'm
						</h4>
						<h1
							className={`${inknut_Antiqua.className} font-bold text-4xl md:text-5xl lg:text-6xl`}
						>
							Seye Olurotimi
						</h1>
						<p className="text-gray-100 text-base md:text-lg font-medium">
							Entrepreneur | Business Coach | MSME Founder
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-8 w-full md:w-auto">
						<Button
							className="w-full"
							variant={"secondary"}
							asChild
						>
							<Link href="/about">Learn more</Link>
						</Button>
						<Button className="w-full" variant={"black"} asChild>
							<Link href="/contact">Contact me</Link>
						</Button>
					</div>
				</div>
				<div className="col-span-2 flex items-center justify-center md:justify-end">
					<Image
						src={"/assets/images/seye-olurotimi-one.png"}
						alt={"Seye Olurotimi"}
						width={1000}
						height={1000}
						className="w-auto h-full"
					/>
				</div>
			</main>
		</div>
	);
};

export default Showcase;
