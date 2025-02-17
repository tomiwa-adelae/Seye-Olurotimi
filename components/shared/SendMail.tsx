import { Inknut_Antiqua } from "next/font/google";
import { Button } from "../ui/button";
import { seyeEmailAddress } from "@/constants";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SendMail = () => {
	return (
		<div className="container rounded-3xl my-16 py-6 px-6 bg-green-400 text-white flex items-center justify-between flex-col sm:flex-row gap-5">
			<h4
				className={`font-semibold text-lg lg:text-lg ${inknut_Antiqua.className}`}
			>
				Want to send an email?
			</h4>
			<Button
				size={"lg"}
				className="w-full sm:w-auto"
				variant={"secondary"}
				asChild
			>
				<a target="_blank" href={`mailto:${seyeEmailAddress}`}>
					{seyeEmailAddress}
				</a>
			</Button>
		</div>
	);
};

export default SendMail;
