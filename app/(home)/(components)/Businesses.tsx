import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { businesses } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Businesses = () => {
	return (
		<div className="bg-white text-black pt-16 pb-4 container">
			<SectionTitle
				title="Businesses & Initiatives"
				subTitle="What I do"
			/>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
				{businesses.map(({ logo, link, title, summary }, index) => (
					<div
						key={index}
						className="grid gap-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-12 px-8 rounded-lg"
					>
						<Image
							src={logo}
							alt={title}
							width={1000}
							height={1000}
							className="w-[150px] h-auto mx-auto"
						/>
						<p className="text-gray-400 text-sm text-center leading-loose">
							{summary}
						</p>
						<div className="mx-auto">
							<Button asChild>
								<Link href={link}>Learn more</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Businesses;
