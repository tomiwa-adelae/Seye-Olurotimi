import { Inknut_Antiqua } from "next/font/google";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SectionTitle = ({
	subTitle,
	title,
	position = "center",
	description,
	header,
}: {
	subTitle: string;
	title: string;
	position?: string;
	description?: string;
	header?: boolean;
}) => {
	return (
		<div
			className={`grid gap-6 ${
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
			<h2
				className={`font-bold text-2xl lg:text-3xl ${
					header &&
					`${inknut_Antiqua.className} capitalize text-3xl md:text-4xl lg:text-4xl`
				}`}
			>
				{title}
			</h2>
			<p className="text-sm text-gray-400 leading-relaxed w-full">
				{description}
			</p>
		</div>
	);
};

export default SectionTitle;
