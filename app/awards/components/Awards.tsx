import Image from "next/image";
import { AwardsTimeline } from "@/components/ui/awards-timeline";

const Awards = () => {
	const data = [
		{
			title: 2025,
			content: (
				<div className="grid gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h4 className="text-gray-400 text-base font-semibold mt-4 md:mt-0 mb-4 flex items-center justify-center md:text-center md:h-60">
							Education and the Beginning of Entrepreneurship
						</h4>
						<Image
							src="/assets/images/awards.jpg"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h4 className="text-gray-400 text-base font-semibold mt-4 md:mt-0 mb-4 flex items-center justify-center md:text-center md:h-60 order-2">
							African Business Leader of The Year by Africa
							Investor magazine
						</h4>
						<Image
							src="/assets/images/awards.jpg"
							alt="startup template"
							width={1000}
							height={1000}
							className="order-2 md:order-1 rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: 2023,
			content: (
				<div className="grid gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h4 className="text-gray-400 text-base font-semibold mt-4 md:mt-0 mb-4 flex items-center justify-center md:text-center md:h-60">
							Education and the Beginning of Entrepreneurship
						</h4>
						<Image
							src="/assets/images/awards.jpg"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h4 className="text-gray-400 text-base font-semibold mt-4 md:mt-0 mb-4 flex items-center justify-center md:text-center md:h-60 order-2">
							African Business Leader of The Year by Africa
							Investor magazine
						</h4>
						<Image
							src="/assets/images/awards.jpg"
							alt="startup template"
							width={1000}
							height={1000}
							className="order-2 md:order-1 rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: 2020,
			content: (
				<div className="grid gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h4 className="text-gray-400 text-base font-semibold mt-4 md:mt-0 mb-4 flex items-center justify-center md:text-center md:h-60">
							Education and the Beginning of Entrepreneurship
						</h4>
						<Image
							src="/assets/images/awards.jpg"
							alt="startup template"
							width={1000}
							height={1000}
							className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<h4 className="text-gray-400 text-base font-semibold mt-4 md:mt-0 mb-4 flex items-center justify-center md:text-center md:h-60 order-2">
							African Business Leader of The Year by Africa
							Investor magazine
						</h4>
						<Image
							src="/assets/images/awards.jpg"
							alt="startup template"
							width={1000}
							height={1000}
							className="order-2 md:order-1 rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="bg-white text-black pt-16">
			<AwardsTimeline data={data} />
		</div>
	);
};

export default Awards;
