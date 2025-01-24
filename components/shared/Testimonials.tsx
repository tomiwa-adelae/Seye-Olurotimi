import SectionTitle from "./SectionTitle";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { testimonials } from "@/constants";

const Testimonials = () => {
	return (
		<div className="bg-white text-black pb-16 pt-4 container">
			<SectionTitle
				title="Testimonials & Endorsements"
				subTitle="What people are saying"
			/>
			<div className="mt-8">
				<AnimatedTestimonials testimonials={testimonials} />
			</div>
		</div>
	);
};

export default Testimonials;
