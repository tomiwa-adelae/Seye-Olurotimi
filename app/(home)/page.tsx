import Header from "@/components/shared/Header";
import Showcase from "@/components/Showcase";
import { Button } from "@/components/ui/button";
import React from "react";
import About from "./(components)/About";

const page = () => {
	return (
		<div>
			<Showcase />
			<About />
		</div>
	);
};

export default page;
