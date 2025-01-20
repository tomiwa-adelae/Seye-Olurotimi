import React from "react";
import SectionTitle from "./SectionTitle";
import { Dot } from "lucide-react";
import { Separator } from "../ui/separator";
import { news } from "@/constants";
import Link from "next/link";

const News = () => {
	return (
		<div className="bg-white text-black py-16 container">
			<SectionTitle
				title="Blogs & Updates"
				subTitle="My latest updates"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
				{news.map(
					({ image, title, content, date, duration }, index) => (
						<Link
							href="route"
							key={index}
							style={{
								backgroundImage: `url(${image})`,
							}}
							className={`bg-no-repeat bg-center bg-cover bg-current rounded-3xl min-h-96 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-blend-overlay group ${
								index === 0 && "col-span-1 md:col-span-2"
							}`}
						>
							<div className="bg-white p-4 lg:p-5 rounded-3xl absolute bottom-[3%] translate-y-[-3%] w-[95%] left-[50%] translate-x-[-50%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
								{index === 0 && (
									<b className="text-xs uppercase text-white rounded-full mb-3 inline-block bg-green-400 py-2 px-4">
										Latest
									</b>
								)}
								<h3>
									<Link
										href="/blog"
										className="font-semibold text-lg hover:text-green-400 transition ease-in-out group-hover:text-green-400"
									>
										{title}
									</Link>
								</h3>
								<p className="text-xs text-gray-400 md:text-sm leading-loose mt-2 line-clamp-2">
									{content}
								</p>
								<Separator className="my-3" />
								<div className="flex items-center justify-start">
									<p className="text-xs text-gray-400">
										{date}
									</p>
									<Dot className="text-gray-400 w-4 h-4" />
									<p className="text-xs text-gray-400">
										{duration} read
									</p>
								</div>
							</div>
						</Link>
					)
				)}
			</div>
		</div>
	);
};

export default News;
