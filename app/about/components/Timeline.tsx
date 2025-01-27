import Image from "next/image";
import { AboutTimeline } from "@/components/ui/about-timeline";
import { Minus } from "lucide-react";

const Timeline = () => {
	const data = [
		{
			title: (
				<>
					1963 <br className="hidden md:block" />- 1993
				</>
			),
			subTitle: (
				<>
					01 <div className=" mx-2 w-8 h-0.5 bg-gray-400"></div> Early
					life
				</>
			),
			content: (
				<div>
					<h4 className="text-neutral-800 text-lg md:text-lg font-semibold mt-4 md:mt-0 mb-4">
						Education and the Beginning of Entrepreneurship
					</h4>
					<div className="mb-8">
						<p className="text-sm leading-loose text-gray-400">
							Seye Olurotimi’s journey toward becoming a
							trailblazer in entrepreneurship began with a strong
							foundation in education and a curiosity for
							innovation. Raised in a community where hard work
							and resilience were celebrated, Seye cultivated a
							passion for learning early on, which became the
							cornerstone of his future endeavors. He pursued his
							academic career at [insert university], earning a
							degree in [insert field of study]. <br />
							Seye Olurotimi’s journey toward becoming a
							trailblazer in entrepreneurship began with a strong
							foundation in education and a curiosity for
							innovation. Raised in a community where hard work
							and resilience were celebrated, Seye cultivated a
							passion for learning early on, which became the
							cornerstone of his future endeavors. He pursued his
							academic career at [insert university], earning a
							degree in [insert field of study].
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="/assets/images/seye-olurotimi.png"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="/assets/images/seye-olurotimi.png"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: (
				<>
					1997 <br className="hidden md:block" />- 2004
				</>
			),
			subTitle: (
				<>
					02 <div className=" mx-2 w-8 h-0.5 bg-gray-400"></div> Early
					career
				</>
			),
			content: (
				<div>
					<h4 className="text-neutral-800 text-lg md:text-lg font-semibold mt-4 md:mt-0 mb-4">
						The Turn Around Expert
					</h4>
					<div className="mb-8">
						<p className="text-sm leading-loose text-gray-400">
							Seye Olurotimi’s journey toward becoming a
							trailblazer in entrepreneurship began with a strong
							foundation in education and a curiosity for
							innovation. Raised in a community where hard work
							and resilience were celebrated, Seye cultivated a
							passion for learning early on, which became the
							cornerstone of his future endeavors. He pursued his
							academic career at [insert university], earning a
							degree in [insert field of study]. <br />
							Seye Olurotimi’s journey toward becoming a
							trailblazer in entrepreneurship began with a strong
							foundation in education and a curiosity for
							innovation. Raised in a community where hard work
							and resilience were celebrated, Seye cultivated a
							passion for learning early on, which became the
							cornerstone of his future endeavors. He pursued his
							academic career at [insert university], earning a
							degree in [insert field of study].
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="/assets/images/seye-olurotimi.png"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="/assets/images/seye-olurotimi.png"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: (
				<>
					2005 <br className="hidden md:block" />- Present
				</>
			),
			subTitle: (
				<>
					03 <div className=" mx-2 w-8 h-0.5 bg-gray-400"></div>{" "}
					Entrepreneur
				</>
			),
			content: (
				<div>
					<h4 className="text-neutral-800 text-lg md:text-lg font-semibold mt-4 md:mt-0 mb-4">
						MSME Africa & Cedar Tribe
					</h4>
					<div className="mb-8">
						<p className="text-sm leading-loose text-gray-400">
							Seye Olurotimi’s journey toward becoming a
							trailblazer in entrepreneurship began with a strong
							foundation in education and a curiosity for
							innovation. Raised in a community where hard work
							and resilience were celebrated, Seye cultivated a
							passion for learning early on, which became the
							cornerstone of his future endeavors. He pursued his
							academic career at [insert university], earning a
							degree in [insert field of study]. <br />
							Seye Olurotimi’s journey toward becoming a
							trailblazer in entrepreneurship began with a strong
							foundation in education and a curiosity for
							innovation. Raised in a community where hard work
							and resilience were celebrated, Seye cultivated a
							passion for learning early on, which became the
							cornerstone of his future endeavors. He pursued his
							academic career at [insert university], earning a
							degree in [insert field of study].
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="/assets/images/seye-olurotimi.png"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="/assets/images/seye-olurotimi.png"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="bg-white text-black py-16">
			<AboutTimeline data={data} />
		</div>
	);
};

export default Timeline;
