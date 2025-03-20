import { motion } from "framer-motion";
import Hero from "./hero.jsx";
import "./App.css";
import Graphics from "./graphics.jsx";
import LeadershipPage from "./Leader.jsx";

function Leadership() {
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

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2
			}
		}
	};

	return (
		<motion.div
			className="bg-[#040318] w-full h-full mb-6 overflow-x-hidden"
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
			<Hero />

			{/* Animated Welcome Section */}
			<motion.section
				className="container mx-auto flex text-white justify-center items-center flex-col space-y-4 py-10 lg:py-24 text-center px-3.5"
				variants={staggerContainer}
			>
				<motion.h1
					variants={fadeInUp}
					className="text-2xl lg:text-4xl sm:w-[370px] lg:w-[570px] font-lato font-semibold"
				>
					Welcome to the Official Site of AMB Iyke Dike
				</motion.h1>

				<motion.p
					variants={fadeInUp}
					className="text-lg lg:text-xl font-work sm:w-[350px] lg:w-[650px]"
				>
					Learn more about the life, exploits and ventures of AMB Iyke Dike
					in Education
				</motion.p>
			</motion.section>

			{/* Animated Leadership Section */}
			<motion.div
				className="bg-[#040318] w-full h-full mb-6 overflow-x-hidden"
				variants={slideInLeft}
			>
				<LeadershipPage />
			</motion.div>

			{/* Animated Call-to-Action Section */}
			<motion.section
				className="bg-white text-black flex justify-center items-center flex-col text-center h-[80vh] lg:h-[40vh] py-4 px-4 lg:px-0"
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
				<motion.h2
					variants={fadeInUp}
					className="text-3xl lg:text-[38.8px] font-black mb-3 font-lato"
				>
					DISCOVER YOUR PATH
				</motion.h2>

				<motion.p
					variants={fadeInUp}
					className="text-[18.8px] font-work"
				>
					Unlock a world of opportunities with Iyke Dike.
				</motion.p>

				<motion.p
					variants={fadeInUp}
					className="text-[18.8px] font-work"
				>
					whether you’re looking to deepen your skills, Ignite your business or find Inspiration.
				</motion.p>
			</motion.section>

			{/* Animated Graphics Section */}
			<motion.div
				className="bg-[#040318] w-full h-full mb-6 overflow-x-hidden"
				variants={slideInRight}
			>
				<Graphics />
			</motion.div>
		</motion.div>
	);
}

export default Leadership;
