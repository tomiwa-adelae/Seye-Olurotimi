import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Details = () => {
	return (
		<div className="container py-16 flex flex-col md:flex-row gap-8 items-start justify-between">
			<div className="text-sm flex-1 leading-loose text-gray-400">
				<p>
					The services and trade sectors are showing limited optimism
					for business improvements, as rising operating costs and
					naira depreciation weigh heavily on their performance. This
					was revealed in the December 2024 Business Confidence
					Monitor (BCM) report by the Nigerian Economic Summit Group
					(NESG) and Stanbic IBTC. <br />
					The report highlighted subdued outcomes across sectors, with
					the Services BCM index declining to -3.46 points in
					December, down from -2.10 in November, reflecting ongoing
					operational difficulties. Key challenges for the sector
					include escalating energy prices, exchange rate
					depreciation, and high logistics expenses, all of which
					continue to erode competitiveness and profitability. <br />
					Similarly, the Trade sector faced a sharp decline, with its
					BCM index dropping to -5.59 in December from +0.32 in
					November. While the sector remains a major employer,
					particularly in the informal segment, persistent challenges
					such as limited credit access, high borrowing costs, and
					strained cash flows have hindered its growth potential.{" "}
					<br />
					Despite these challenges, other sectors like
					non-manufacturing (+40.19), agriculture (+35.58), and
					manufacturing (+23.15) demonstrated stronger confidence in
					short-term business performance. However, cautious optimism
					prevailed across the board, with the Future Business
					Expectation Index dropping from +33.17 in November to +28.61
					in December, indicating a slight decline in overall
					sentiment. <br />
					The report noted that expectations for prices, demand,
					investment, and financial performance remain central to the
					cautiously optimistic outlook for the first quarter of 2025.
					However, rising inflation, high interest rates, and weakened
					purchasing power continue to weigh on business confidence
				</p>
			</div>
			<div className="text-gray-400 font-medium flex flex-col items-start md:items-center text-sm justify-center uppercase">
				<h4>Share this</h4>
				<div className="mt-4 md:mt-8 flex md:flex-col items-center justify-start gap-8">
					<a href="">
						<Facebook className="w-4 h-4" />
					</a>
					<a href="">
						<Twitter className="w-4 h-4" />
					</a>
					<a href="">
						<Instagram className="w-4 h-4" />
					</a>
					<a href="">
						<Linkedin className="w-4 h-4" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Details;
