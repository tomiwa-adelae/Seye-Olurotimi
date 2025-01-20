import Header from "@/components/shared/Header";
import Showcase from "@/components/Showcase";
import { Button } from "@/components/ui/button";
import React from "react";
import About from "./(components)/About";
import Businesses from "./(components)/Businesses";
import News from "@/components/shared/News";

const page = () => {
	return (
		<div className="min-h-[3000vh]">
			<Showcase />
			<About />
			<Businesses />
			<News />
		</div>
	);
};

export default page;
