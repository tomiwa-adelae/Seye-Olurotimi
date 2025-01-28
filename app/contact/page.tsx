import { ContactForm } from "@/components/forms/ContactForm";
import FollowUs from "@/components/shared/FollowUs";
import Header from "@/components/shared/Header";
import SectionTitle from "@/components/shared/SectionTitle";
import SendMail from "@/components/shared/SendMail";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div>
			<Header />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Image
					src={"/assets/images/seye-olurotimi-two.jpeg"}
					alt={"Seye Olurotimi"}
					width={1000}
					height={1000}
					className="w-auto h-auto order-2 md:order-1"
				/>
				<ContactForm />
			</div>
			<SendMail />
			<FollowUs />
		</div>
	);
};

export default page;
