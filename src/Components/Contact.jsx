import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWikipediaW, FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
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

	const slideInRight = {
		hidden: { opacity: 0, x: 50 },
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
		<motion.div
			className="my-10 sm:my-20 px-4 sm:px-6 md:px-10 lg:px-0 flex justify-center"
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
			<motion.div
				className="bg-white/20 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg max-w-[1000px] w-full mx-auto flex flex-col lg:flex-row gap-8"
				variants={{
					visible: {
						transition: { staggerChildren: 0.15 }
					}
				}}
			>
				{/* Animated Left Section */}
				<motion.div
					className="flex-1"
					variants={slideInLeft}
				>
					<motion.h2
						variants={fadeInUp}
						className="text-white text-xl sm:text-2xl font-bold mb-6"
					>
						Let's discuss your Project
					</motion.h2>

					<motion.div
						className="p-4 sm:p-5 rounded-xl shadow-xl"
						variants={fadeInUp}
					>
						{/* Animated Address Section */}
						<motion.div
							className="bg-white p-3 sm:p-4 rounded-lg flex items-start shadow-md"
							variants={fadeInUp}
						>
							<div className="bg-[#020659] p-2 sm:p-3 rounded-md text-white mr-3 sm:mr-4">
								<svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
								</svg>
							</div>
							<div>
								<p className="text-gray-500 text-xs sm:text-sm font-semibold">Address:</p>
								<p className="text-gray-800 text-sm sm:text-base font-medium">Plot 1, Block IV, Ext. Phase 2, Core Area Oshimili South LGA, Asaba, Delta State</p>
							</div>
						</motion.div>

						{/* Animated Email Section */}
						<motion.div
							className="bg-white p-3 sm:p-4 rounded-lg flex items-center shadow-md mt-4"
							variants={fadeInUp}
						>
							<div className="bg-[#020659] p-2 sm:p-3 rounded-md text-white mr-3 sm:mr-4">
								<svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 4v16h20V4H2zm18 2v.511l-8 5.077-8-5.077V6h16zM4 18v-9.48l8 5.08 8-5.08V18H4z"></path>
								</svg>
							</div>
							<div>
								<p className="text-gray-500 text-xs sm:text-sm font-semibold">Email:</p>
								<p className="text-gray-800 text-sm sm:text-base font-medium">havyiyke2@yahoo.com</p>
							</div>
						</motion.div>

						{/* Animated Social Media */}
						<motion.div
							className="flex space-x-3 mt-6"
							variants={fadeInUp}
						>
							{[FaInstagram, FaFacebookF, FaWikipediaW].map((Icon, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="w-8 h-8 sm:w-10 sm:h-10 bg-[#020659] flex items-center justify-center rounded-md text-white"
								>
									<Icon className="text-base sm:text-lg" />
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Animated Right Section */}
				<motion.div
					className="flex-1 bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl border border-white/20"
					variants={slideInRight}
				>
					<motion.h3
						variants={fadeInUp}
						className="text-white text-base sm:text-lg font-semibold mb-2"
					>
						Book Us
					</motion.h3>

					<motion.p
						variants={fadeInUp}
						className="text-gray-300 text-xs sm:text-sm mb-4"
						style={{ color: '#fffff' }}
					>
						Have any project inquiries or require support?
					</motion.p>

					<motion.form
						className="space-y-4"
						variants={{
							visible: {
								transition: { staggerChildren: 0.1 }
							}
						}}
					>
						{/* Animated Form Fields */}
						<motion.input
							variants={fadeInUp}
							type="text"
							placeholder="Name*"
							className="w-full bg-transparent border-b border-gray-300 text-white p-2 text-sm sm:text-base focus:outline-none"
							required
						/>
						<motion.input
							variants={fadeInUp}
							type="email"
							placeholder="Email*"
							className="w-full bg-transparent border-b border-gray-300 text-white p-2 text-sm sm:text-base focus:outline-none"
							required
						/>
						<motion.input
							variants={fadeInUp}
							type="text"
							placeholder="Location"
							className="w-full bg-transparent border-b border-gray-300 text-white p-2 text-sm sm:text-base focus:outline-none"
						/>
						<motion.div
							className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
							variants={{
								visible: {
									transition: { staggerChildren: 0.1 }
								}
							}}
						>
							<motion.input
								variants={fadeInUp}
								type="text"
								placeholder="Budget*"
								className="w-full sm:w-1/2 bg-transparent border-b border-gray-300 text-white p-2 text-sm sm:text-base focus:outline-none"
								required
							/>
							<motion.input
								variants={fadeInUp}
								type="text"
								placeholder="Subject*"
								className="w-full sm:w-1/2 bg-transparent border-b border-gray-300 text-white p-2 text-sm sm:text-base focus:outline-none"
								required
							/>
						</motion.div>
						<motion.textarea
							variants={fadeInUp}
							placeholder="Message*"
							className="w-full bg-transparent border-b border-gray-300 text-white p-2 text-sm sm:text-base focus:outline-none h-20"
							required
						/>
						<motion.div
							className="mt-6 flex justify-center sm:flex sm:justify-center md:justify-center lg:justify-start"
							variants={fadeInUp}
						>
							<motion.button
								variants={fadeInUp}
								className="bg-[#020659] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-xs sm:text-sm font-medium"
							>
								Let's work Together <FaArrowRight />
							</motion.button>
						</motion.div>
					</motion.form>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
