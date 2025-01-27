import Header from "@/components/shared/Header";
import NewsBox from "@/components/shared/NewsBox";
import SectionTitle from "@/components/shared/SectionTitle";
import { news } from "@/constants";
import React from "react";

const page = () => {
	return (
		<div>
			<Header />
			<div className="container pt-8 pb-16">
				<SectionTitle
					subTitle="My latest updates"
					title="Stay informed"
					description="Explore articles, tips, and stories about entrepreneurship, business growth, and personal reflections"
					position="center"
					header={true}
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
		</div>
	);
};

export default page;
