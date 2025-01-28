import Header from "@/components/shared/Header";
import SectionTitle from "@/components/shared/SectionTitle";
import Awards from "./components/Awards";

const page = () => {
	return (
		<div>
			<Header />
			<div className="container pt-8 pb-16">
				<SectionTitle
					subTitle="Awards & Recognitions"
					title="Celebrating Excellence"
					position="center"
					header={true}
				/>
				<div className="bg-white">
					<Awards />
				</div>
			</div>
		</div>
	);
};

export default page;
