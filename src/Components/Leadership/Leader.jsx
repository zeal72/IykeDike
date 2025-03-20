import { motion } from "framer-motion";

function LeadershipPage() {
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
			className="bg-[#0F0D31] h-auto flex flex-col-reverse lg:flex-row text-white"
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
			{/* Animated Left Section */}
			<motion.div
				className="flex-[2] flex flex-col justify-center items-center"
				variants={slideInLeft}
			>
				{/* Animated Image */}
				<motion.div
					className="mt-6 lg:mt-0 mb-6"
					variants={fadeInUp}
				>
					<img className="w-auto h-auto flex justify-center" src='ment.png' alt="Leadership and Mentorship" />
				</motion.div>

				{/* Animated Description */}
				<motion.div
					className="lg:w-[679px] font-loto px-3 lg:px-0"
					variants={{
						visible: {
							transition: { staggerChildren: 0.15 }
						}
					}}
				>
					<motion.p
						variants={fadeInUp}
						className="text-2xl font-medium"
						style={{ fontWeight: '550' }}
					>
						Inspiring the Next Generation:
					</motion.p>

					<motion.p
						variants={fadeInUp}
						className="text-xl max-w-[595px] font-[500] mt-2"
						style={{ fontWeight: '550' }}
					>
						As a passionate public speaker and mentor, Iyke Dike has spoken at numerous events,
						conferences, and seminars, inspiring youth, entrepreneurs, and leaders to pursue
						their purpose with persistence and courage.
					</motion.p>

					{/* Animated Speaking Topics */}
					<motion.div
						className="mt-4"
						variants={fadeInUp}
					>
						<p className="text-xl font-bold" style={{ fontWeight: '550' }}>Speaking Topics:</p>
						<motion.ul
							className="list-disc pl-8 text-xl lg:w-[595px] mb-5 lg:mb-0 font-[500]"
							variants={{
								visible: {
									transition: { staggerChildren: 0.1 }
								}
							}}
						>
							<motion.li variants={fadeInUp}>
								<span className="font-[500]">Education for Purpose:</span> How schools can empower the next generation to thrive in life, not just exams.
							</motion.li>
							<motion.li variants={fadeInUp}>
								<span className="font-[500]">The Trypreneur Mindset:</span> Why trying, failing, and persisting is the secret to success.
							</motion.li>
							<motion.li variants={fadeInUp}>
								<span className="font-[500]">Leadership in Action:</span> Lessons on leading with purpose, vision, and courage.
							</motion.li>
						</motion.ul>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Animated Right Section */}
			<motion.div
				className="flex-[1]"
				variants={slideInRight}
			>
				<img className="w-full object-cover" src="leadership.png" alt="Iyke Dike" />
			</motion.div>
		</motion.div>
	);
}

export default LeadershipPage;
