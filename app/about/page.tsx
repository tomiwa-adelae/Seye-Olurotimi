import Header from "@/components/shared/Header";
import Showcase from "./components/Showcase";
import Timeline from "./components/Timeline";
import { Separator } from "@/components/ui/separator";

const page = () => {
	return (
		<div>
			<Header />
			<Showcase />
			<Separator className="container" />
			<Timeline />
		</div>
	);
};

export default page;
