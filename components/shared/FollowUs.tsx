import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { socialLinks } from "@/constants";

const FollowUs = () => {
	return (
		<div className="bg-white text-black pb-10 container">
			<SectionTitle
				title="Follow me on social media"
				subTitle="Stay connected"
				description="Join me on social media to get the latest updates, insights, and behind-the-scenes moments from my journey."
			/>
			<div className="mt-8 flex items-center justify-center gap-8">
				{socialLinks.map(({ link, icon, color }, index) => {
					const Icon = icon;

					return (
						<Link key={index} href={link}>
							<div
								style={{
									color,
								}}
								className={`inline-block p-3 rounded-full`}
							>
								<Icon className="w-6 h-6" />
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default FollowUs;
