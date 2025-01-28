import Header from "@/components/shared/Header";
import { ImageLibrary } from "@/components/shared/ImageLibrary";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";

const page = () => {
	const images = [
		{ src: "/assets/images/seye-olurotimi.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
		{ src: "/assets/images/seye-olurotimi.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
		{ src: "/assets/images/seye-olurotimi.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
		{ src: "/assets/images/seye-olurotimi.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
		{ src: "/assets/images/seye-olurotimi-two.jpeg" },
		{ src: "/assets/images/seye-olurotimi-one.png" },
	];
	return (
		<div>
			<Header />
			<div className="container pt-8 pb-16">
				<SectionTitle
					subTitle="Who am I"
					title="Browse my Gallery"
					position="center"
					header={true}
				/>
				<div className="mt-8">
					<div>
						<h3 className="font-medium text-base uppercase mb-2 text-gray-400">
							Images
						</h3>
						<ImageLibrary images={images} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
