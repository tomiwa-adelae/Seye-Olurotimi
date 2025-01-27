import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import React from "react";

const Showcase = () => {
	return (
		<div
			className="bg-no-repeat bg-center bg-cover bg-current min-h-96 relative group h-[70vh]"
			style={{
				backgroundImage: `url(/assets/images/dollars-img.jpg)`,
			}}
		>
			<div className="bg-white p-4 lg:p-5 rounded-3xl absolute bottom-[7%] translate-y-[-7%] w-[95%] left-[50%] translate-x-[-50%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
				<h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
					Dollar rates increases as Naira’s decline continues
				</h3>
				<div className="flex items-center justify-start mt-2 lg:mt-4">
					<p className="text-xs lg:text-sm text-gray-400">
						20th of January, 2025
					</p>
					<Dot className="text-gray-400 w-4 h-4" />
					<p className="text-xs lg:text-sm text-gray-400">
						5 minutes read
					</p>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
