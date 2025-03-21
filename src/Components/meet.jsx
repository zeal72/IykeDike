import { motion } from "framer-motion";
import React from "react";

const MeetIyke = () => {
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

	const slideIn = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "circOut"
			}
		}
	};

	return (
		<section className="w-full bg-gradient-to-b from-[#0B0A1F] to-[#100F2B] flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-28">
			<div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
				{/* Animated Image */}
				<motion.div
					className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px 0px" }}
					variants={slideIn}
				>
					<img
						src="./meetiyke.png"
						alt="Iyke Dike"
						className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg"
					/>
				</motion.div>

				{/* Animated Text Content */}
				<motion.div
					className="w-full lg:w-1/2 text-white flex flex-col justify-center text-center lg:text-left"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px 0px" }}
					variants={{
						visible: {
							transition: { staggerChildren: 0.15 }
						}
					}}
				>
					<motion.h2
						variants={fadeInUp}
						className="font-poppins font-bold text-[32px] md:text-[36px] lg:text-[42px] leading-[109%]"
					>
						Meet Iyke
					</motion.h2>

					<motion.p
						variants={fadeInUp}
						className="text-lg leading-relaxed font-lato mt-7 font-medium italic text-white/80"
					>
						<span className="font-bold">Iyke Dike is a visionary leader,</span> educator, and entrepreneur
						dedicated to nurturing purpose and fostering innovation in the lives of young people. With a
						mission deeply rooted in closing the knowledge gap and empowering the next generation of
						leaders, Iyke leverages his diverse experiences in education, real estate, and mentorship to
						inspire sustainable growth in the marketplace and beyond.
					</motion.p>

					<motion.div
						variants={fadeInUp}
						className="flex justify-center lg:justify-start mt-6"
					>
						<button
							className="min-w-[140px] md:min-w-[160px] gap-2.5 lg:min-w-[180px] h-[2.8rem] md:h-[3rem] lg:h-[3.2rem] rounded-full border border-white/10 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] hover:bg-[#4a4a57] shadow-[0px_6px_12px_rgba(0,0,0,0.5),0px_3px_6px_rgba(0,0,0,0.3),0px_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center px-4 md:px-6 lg:px-8 text-white font-medium text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] transition-all duration-300 cursor-pointer"
						>
							Read more <span>→</span>
						</button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default MeetIyke;
