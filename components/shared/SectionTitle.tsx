import React from "react";

const SectionTitle = ({
	subTitle,
	title,
	position = "center",
	description,
}: {
	subTitle: string;
	title: string;
	position?: string;
	description?: string;
}) => {
	return (
		<div
			className={`grid gap-4 ${
				position === "center" ? "text-center" : "text-left"
			}`}
		>
			<div
				className={`flex items-center ${
					position === "center" ? "justify-center" : "justify-start"
				} gap-4 uppercase font-semibold text-xs lg:text-base text-gray-400`}
			>
				<div className="flex items-center justify-start gap-1">
					<div className="w-8 h-1 bg-green-400"></div>
					<div className="w-1.5 h-1 bg-green-400"></div>
				</div>
				<h4>{subTitle}</h4>
			</div>
			<h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
			<p className="text-sm leading-relaxed w-full">{description}</p>
		</div>
	);
};

export default SectionTitle;
