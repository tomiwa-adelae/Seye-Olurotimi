"use client";

import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { Dot } from "lucide-react";

const NewsBox = ({
	image,
	index,
	title,
	content,
	date,
	duration,
}: {
	image: string;
	index: number;
	title: string;
	content: string;
	date: string;
	duration: string;
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
			}}
			className={`bg-no-repeat bg-center bg-cover bg-current rounded-3xl min-h-96 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-blend-overlay group ${
				index === 0 && "col-span-1 md:col-span-2"
			}`}
		>
			<div className="bg-white p-4 lg:p-5 rounded-3xl absolute bottom-[3%] translate-y-[-3%] w-[95%] left-[50%] translate-x-[-50%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
				{index === 0 && (
					<b className="text-xs uppercase text-white rounded-full mb-3 inline-block bg-green-400 py-2 px-4">
						Latest
					</b>
				)}
				<h3>
					<Link
						href="/blogs/12345"
						className="font-semibold text-lg hover:text-green-400 transition ease-in-out group-hover:text-green-400"
					>
						{title}
					</Link>
				</h3>
				<p className="text-xs text-gray-400 md:text-sm leading-loose mt-2 line-clamp-2">
					{content}
				</p>
				<Separator className="my-3" />
				<div className="flex items-center justify-start">
					<p className="text-xs text-gray-400">{date}</p>
					<Dot className="text-gray-400 w-4 h-4" />
					<p className="text-xs text-gray-400">{duration} read</p>
				</div>
			</div>
		</div>
	);
};

export default NewsBox;
