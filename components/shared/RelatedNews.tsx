import React from "react";
import NewsBox from "./NewsBox";
import { news } from "@/constants";

const RelatedNews = () => {
	return (
		<div className="container">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
				{news
					.slice(0, 3)
					.map(({ image, title, content, date, duration }, index) => (
						<NewsBox
							title={title}
							content={content}
							date={date}
							duration={duration}
							// index={}
							key={index}
							image={image}
						/>
					))}
			</div>
		</div>
	);
};

export default RelatedNews;
