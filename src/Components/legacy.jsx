import { motion } from "framer-motion";
import React from "react";

const EmpowerSection = () => {
	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	const scaleUp = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: "easeInOut"
			}
		}
	};

	return (
		<section className="w-full bg-transparent flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20">
			<motion.div
				className="max-w-6xl mx-auto w-full flex flex-col items-center text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={{
					visible: {
						transition: { staggerChildren: 0.15 }
					}
				}}
			>
				{/* Animated Heading */}
				<motion.h2
					variants={fadeInUp}
					className="font-poppins font-bold text-[32px] md:text-[36px] lg:text-[42px] leading-[110%] text-white"
				>
					Empowering youth, Building legacies
				</motion.h2>

				{/* Animated Description */}
				<motion.p
					variants={fadeInUp}
					className="text-lg leading-relaxed max-w-2xl font-lato mt-4 font-medium text-white/80"
				>
					Iyke and his team has invested in impactful projects in Education, Real Estate, and Leadership, each
					designed to equip young minds, create wealth sustainably, and inspire purposeful living.
				</motion.p>

				{/* Animated Images Container */}
				<motion.div
					variants={scaleUp}
					className="relative w-full max-w-4xl mt-10 flex justify-center items-center"
				>
					{/* Left: Image inside tilted frame */}
					<div className="">
						<img
							src="./legacy.png"
							alt="Iyke Speaking"
							className="w-full h-full object-cover transform"
						/>
					</div>
				</motion.div>

				{/* Animated Button */}
				<motion.div
					variants={fadeInUp}
					className="mt-8"
				>
					<button
						className="min-w-[140px] md:min-w-[160px] gap-2.5 lg:min-w-[180px] h-[2.8rem] md:h-[3rem] lg:h-[3.2rem] rounded-full border border-white/10 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] hover:bg-[#4a4a57] shadow-[0px_6px_12px_rgba(0,0,0,0.5),0px_3px_6px_rgba(0,0,0,0.3),0px_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center px-4 md:px-6 lg:px-8 text-white font-medium text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] transition-all duration-300 cursor-pointer"
					>
						Read more <span>→</span>
					</button>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default EmpowerSection;
