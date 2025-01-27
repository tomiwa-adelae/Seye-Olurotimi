import React from "react";
import SectionTitle from "./SectionTitle";
import { Dot } from "lucide-react";
import { Separator } from "../ui/separator";
import { news } from "@/constants";
import Link from "next/link";
import NewsBox from "./NewsBox";

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
						<NewsBox
							title={title}
							content={content}
							date={date}
							duration={duration}
							index={index}
							key={index}
							image={image}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default News;
