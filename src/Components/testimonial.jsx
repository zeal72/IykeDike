import React, { useState, useEffect } from "react";
import Marquee from 'react-fast-marquee';
import { motion } from "framer-motion";
import { Slider } from "./Slider";

const testimonials = [
	{ id: 1, image: "/Image.png", text: "Great service!", author: "John Doe" },
	{ id: 2, image: "/Image.png", text: "Excellent work!", author: "Jane Smith" },
	{ id: 3, image: "/Image.png", text: "Highly recommended!", author: "Bob Johnson" },
	{ id: 4, image: "/Image.png", text: "Outstanding experience!", author: "Alice Brown" },
];

export default function TestimonialSlider() {
	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	const slideInLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "anticipate"
			}
		}
	};

	return (
		<section className="relative text-white overflow-hidden">
			{/* Animated Header Section */}
			<motion.div
				className="text-center mt-12 px-4"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={{
					visible: {
						transition: { staggerChildren: 0.15 }
					}
				}}
			>
				<motion.h2 variants={fadeInUp} className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white leading-tight pb-2 font-poppins">
					Happy Clients
				</motion.h2>

				<motion.p variants={fadeInUp} className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal text-gray-300 pb-1 leading-snug font-workSans">
					Empowering youth, Building legacies
				</motion.p>

				<motion.p variants={fadeInUp} className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-400 font-semibold font-poppins leading-relaxed">
					There are many variations of passages of Iyke Dike available.
				</motion.p>
			</motion.div>

			{/* Animated Background + Social Images */}
			<motion.div
				className="relative text-center overflow-hidden p-2"
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: {
						duration: 0.7,
						ease: "easeInOut"
					}
				}}
				viewport={{ once: true }}
			>
				{/* Background Image */}
				<img src="./Rectangle 64.png" alt="" className="w-full h-auto max-w-screen-xl mx-auto object-cover" />

				{/* Animated Social Icons Marquee */}
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl overflow-hidden"
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: {
							duration: 0.7,
							delay: 0.2
						}
					}}
				>
					<Marquee speed={50} gradient={false}>
						<div className="flex items-center gap-14 p-10">
							<img src="./google.png" alt="Google" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./dribbble.png" alt="Dribbble" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./linkedin.png" alt="LinkedIn" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./facebook.png" alt="Facebook" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
							<img src="./wikipedia.png" alt="Wikipedia" className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
						</div>
					</Marquee>
				</motion.div>
			</motion.div>

			{/* Animated Testimonials Heading */}
			<motion.h2
				className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white text-center my-8 font-poppins"
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: {
						duration: 0.6,
						ease: "easeOut"
					}
				}}
				viewport={{ once: true }}
			>
				Testimonials
			</motion.h2>

			<Slider />
		</section>
	);
}
