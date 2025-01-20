"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { aboutStats } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const About = () => {
	return (
		<div className="bg-white text-black grid grid-cols-1 md:gap-4 md:grid-cols-2">
			<Image
				src={"/assets/images/seye-olurotimi-two.jpeg"}
				alt="Mr. Seye Olurotimi in a brown suit and a beautiful smile"
				width={1000}
				height={1000}
				className="w-auto h-auto order-1 md:-order-1"
			/>
			<div className="container py-16 flex flex-col">
				<SectionTitle
					title="20+ Years of Experience"
					subTitle="Learn about me"
					position="left"
				/>
				<p className="text-gray-400 text-sm leading-loose mt-4">
					With over a decade of experience in business development and
					entrepreneurship, Seye Olurotimi has become a leading
					advocate for MSMEs in Africa. As the founder of MSME Africa
					and CedarTribe Ltd, he has empowered thousands of
					entrepreneurs through mentorship, resources, and actionable
					insights. Seye's mission is to inspire innovation, create
					opportunities, and drive economic growth.
				</p>
				<div className="grid grid-cols-2 gap-4 gap-y-8 mt-8">
					{aboutStats.map(({ number, title, suffix }, index) => (
						<div key={index} className="grid gap-1">
							<h3 className="font-semibold text-xl text-green-400">
								<CountUp
									start={0}
									end={number}
									duration={2.25}
									decimal=","
									suffix={suffix}
								/>
							</h3>
							<strong className="text-sm font-medium text-gray-400">
								{title}
							</strong>
						</div>
					))}
				</div>
				<div>
					<Button className="mt-8 w-auto" asChild>
						<Link href="/about">Learn more</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default About;
