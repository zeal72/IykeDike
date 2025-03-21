import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
	// Animation variants for reusability
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	return (
		<section className="w-full bg-[#040318] flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-0 lg:py-14">
			<div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
				{/* Animated Left Content */}
				<motion.div
					className="text-white max-w-lg flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						visible: {
							transition: { staggerChildren: 0.15 }
						}
					}}
				>
					<motion.h1 variants={fadeInUp} className="font-poppins font-bold text-[32px] md:text-[36px] lg:text-[42px] leading-[109%] tracking-[0%] text-white text-center md:text-left">
						Inspiring Purpose, <br className="hidden md:block" /> Building Future Leaders
					</motion.h1>

					<motion.p variants={fadeInUp} className="font-lato font-medium italic text-[18px] md:text-[19px] lg:text-[20px] leading-[120%] tracking-[0%] text-white text-center md:text-left">
						Iyke Dike is dedicated to empowering young minds, creating educational legacies,
						and transforming communities through innovation, resilience, and knowledge-sharing.
					</motion.p>

					<motion.div variants={fadeInUp} className="flex justify-center md:justify-start">
						<button className="min-w-[140px] md:min-w-[160px] gap-2.5 lg:min-w-[180px] h-[2.8rem] md:h-[3rem] lg:h-[3.2rem] rounded-full border border-white/10 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] hover:bg-[#4a4a57] shadow-[0px_6px_12px_rgba(0,0,0,0.5),0px_3px_6px_rgba(0,0,0,0.3),0px_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center px-4 md:px-6 lg:px-8 text-white font-medium text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] transition-all duration-300 cursor-pointer">
							Discover more <span>→</span>
						</button>
					</motion.div>

					{/* Animated Success Metrics */}
					<div className="text-center">
						<motion.p variants={fadeInUp} className="text-gray-500 text-lg p-2 font-poppins font-bold">
							Empowering Success Stories
						</motion.p>

						<div className="flex items-center justify-center md:justify-start gap-x-6 md:gap-x-8 lg:gap-x-12 text-white mt-4">
							{[
								{ number: 15, label: "Schools" },
								{ number: "42+", label: "Projects Launched" },
								{ number: 614, label: "Clients" },
								{ number: 970, label: "Communities" },
							].map((item, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									custom={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									className={`flex flex-col items-center ${index !== 3 ? "border-r border-white pr-3 md:pr-4 lg:pr-6" : ""}`}
								>
									<h2 className="text-2xl md:text-2.5xl lg:text-3xl font-bold">{item.number}</h2>
									<p className="font-work-sans text-[10px] md:text-[11px] lg:text-[12px] text-center text-white">
										{item.label}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Animated Image Section */}
				<motion.div
					className="relative pt-6 h-auto w-full max-w-4xl md:max-w-4xl lg:max-w-4xl xl:max-w-6xl"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.8,
							ease: "easeInOut",
							delay: 0.2
						}
					}}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
				>
					<img
						src="/iyke.png"
						alt="Main Person"
						className="w-full object-cover relative z-10 rounded-lg"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
