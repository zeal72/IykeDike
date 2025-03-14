import React, { useState, useEffect } from "react";
import Marquee from 'react-fast-marquee';
// import { FaGoogle, FaDribbble, FaLinkedin, FaFacebook, FaWikipediaW } from "react-icons/fa";
import { Slider } from "./Slider";

const testimonials = [
	{ id: 1, image: "/Image.png", text: "Great service!", author: "John Doe" },
	{ id: 2, image: "/Image.png", text: "Excellent work!", author: "Jane Smith" },
	{ id: 3, image: "/Image.png", text: "Highly recommended!", author: "Bob Johnson" },
	{ id: 4, image: "/Image.png", text: "Outstanding experience!", author: "Alice Brown" },
];

export default function TestimonialSlider() {

	return (
		<section className=" relative text-white overflow-hidden">
			{/* Header Section */}
			<div className="text-center mt-12 px-4">
				<h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white leading-tight pb-2 font-poppins">
					Happy Clients
				</h2>
				<p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal text-gray-300 pb-1 leading-snug font-workSans">
					Empowering youth, Building legacies
				</p>
				<p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-400 font-semibold font-poppins leading-relaxed">
					There are many variations of passages of Iyke Dike available.
				</p>
			</div>

			{/* Background + Social Images */}
			<div className="relative text-center overflow-hidden p-2">
				{/* Background Image */}
				<img src="./Rectangle 64.png" alt="" className="w-full h-auto max-w-screen-xl mx-auto object-cover" />

				{/* Social Icons Marquee */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl overflow-hidden">
					<Marquee speed={50} gradient={false}>
						<div className="flex items-center gap-14 p-10">
							<img src="./google.png" alt="Google" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./dribbble.png" alt="Dribbble" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./linkedin.png" alt="LinkedIn" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./facebook.png" alt="Facebook" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./wikipedia.png" alt="Wikipedia" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
						</div>
					</Marquee>
				</div>
			</div>

			{/* Testimonials Heading */}
			<h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white text-center my-8 font-poppins">
				Testimonials
			</h2>
			<Slider />
		</section >
	);
}
