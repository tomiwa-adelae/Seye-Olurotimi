import Header from "@/components/shared/Header";
import Showcase from "./components/Showcase";
import Details from "./components/Details";
import { news } from "@/constants";
import NewsBox from "@/components/shared/NewsBox";
import RelatedNews from "@/components/shared/RelatedNews";

const page = () => {
	return (
		<div>
			<Header />
			<Showcase />
			<Details />
			<RelatedNews />
		</div>
	);
};

export default page;
