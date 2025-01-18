import React from "react";

const SectionTitle = ({
	subTitle,
	title,
}: {
	subTitle: string;
	title: string;
}) => {
	return (
		<div className="grid gap-4">
			<div className="flex items-center justify-start gap-4 uppercase font-semibold text-xs lg:text-base text-gray-400">
				<div className="flex items-center justify-start gap-1">
					<div className="w-8 h-1 bg-green-400"></div>
					<div className="w-1.5 h-1 bg-green-400"></div>
				</div>
				<h4>{subTitle}</h4>
			</div>
			<h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
		</div>
	);
};

export default SectionTitle;
