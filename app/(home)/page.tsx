import Header from "@/components/shared/Header";
import Showcase from "@/components/Showcase";
import { Button } from "@/components/ui/button";
import React from "react";
import About from "./(components)/About";
import Businesses from "./(components)/Businesses";
import News from "@/components/shared/News";
import Testimonials from "@/components/shared/Testimonials";
import Spotlight from "./(components)/Spotlight";
import FollowUs from "@/components/shared/FollowUs";
import Events from "@/components/shared/Events";

const page = () => {
	return (
		<div>
			<Showcase />
			<About />
			<Businesses />
			<Events />
			<News />
			<Testimonials />
			<Spotlight />
			<FollowUs />
		</div>
	);
};

export default page;
