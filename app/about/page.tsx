import Header from "@/components/shared/Header";
import Showcase from "./components/Showcase";
import Timeline from "./components/Timeline";
import { Separator } from "@/components/ui/separator";
import Awards from "./components/Awards";

const page = () => {
	return (
		<div>
			<Header />
			<Showcase />
			<Separator className="container" />
			<Timeline />
			<Awards />
		</div>
	);
};

export default page;
