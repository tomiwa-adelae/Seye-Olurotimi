import Image from "next/image";
import Link from "next/link";

const Awards = () => {
	return (
		<Link
			href="/awards"
			className="pt-8 pb-20 container mx-auto flex items-center justify-center gap-4 flex-col"
		>
			<Image
				src={"/assets/images/seye-olurotimi-3.png"}
				alt={"Seye Olurotimi in a navy blue suit"}
				width={1000}
				height={1000}
				className="w-[180px] md:w-[150px] md:h-[150px]  lg:w-[120px] lg:h-[120px] h-[180px] md: mx-auto object-cover rounded-full"
			/>
			<div className="mx-auto">
				<div className="inline-block w-auto py-1 border-black border-b-2">
					<h4 className="font-bold text-black text-sm text-center">
						Awards & Recognitions
					</h4>
				</div>
			</div>
		</Link>
	);
};

export default Awards;
