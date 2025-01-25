import { Inknut_Antiqua } from "next/font/google";
import Image from "next/image";

const inknut_Antiqua = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Showcase = () => {
	return (
		<div className="container py-10 grid grid-cols-1 gap-4 md:grid-cols-2 text-gray-400">
			<div>
				<h4 className="font-semibold text-base lg:text-lg ">
					Entrepreneur, Mentor, Visionary
				</h4>
				<h1
					className={`${inknut_Antiqua.className} font-bold text-4xl md:text-5xl lg:text-6xl mt-2 leading-loose md:leading-loose lg:leading-relaxed text-black`}
				>
					Seye Timothy <br /> Olurotimi
				</h1>
				<p className="text-sm leading-loose mt-4">
					Seye Olurotimi is a dynamic entrepreneur, business
					strategist, and mentor with a passion for empowering small
					and medium enterprises (SMEs) to thrive in today’s
					competitive landscape. As the founder of MSME Africa, he has
					established himself as a visionary leader, driving
					innovation and providing invaluable support to businesses
					across the continent. <br /> Born and raised in Nigeria,
					Seye developed an early interest in entrepreneurship and
					problem-solving. This passion led him to pursue a degree in
					[insert relevant field] at [university], where he honed his
					skills in business development and strategic planning. Over
					the years, he has amassed a wealth of experience working
					with organizations in diverse sectors, including [list
					industries if relevant], helping them achieve sustainable
					growth. <br /> In 2017, Seye launched MSME Africa, a
					platform dedicated to providing resources, mentorship, and
					opportunities to small businesses. Under his leadership,
					MSME Africa has become a trusted name, hosting impactful
					events, delivering tailored training programs, and creating
					a vibrant network of entrepreneurs. His efforts have earned
					him recognition as a thought leader in the SME space, with
					features in [insert notable publications] and invitations to
					speak at prestigious conferences. Beyond his professional
					endeavors, Seye is deeply committed to community development
					and youth empowerment. He believes in the transformative
					power of entrepreneurship to uplift individuals and
					communities, and he actively works to create opportunities
					for others to succeed. <br /> When he’s not working, Seye
					enjoys reading, traveling, and exploring innovative ideas.
					He is also an advocate for lifelong learning and believes
					that personal growth is the foundation of professional
					success. <br />
					Through his unwavering dedication, Seye Olurotimi continues
					to inspire a new generation of entrepreneurs and remains a
					driving force for positive change in the business world.
				</p>
			</div>
			<div className="my-auto">
				<Image
					src={"/assets/images/seye-olurotimi-standing.png"}
					alt={"Mr. Seye Olurotimi in a standing pose"}
					width={1000}
					height={1000}
					className="w-full h-full"
				/>
			</div>
		</div>
	);
};

export default Showcase;
