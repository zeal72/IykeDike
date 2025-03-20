import { motion } from "framer-motion";
import { useState } from "react";

const Graphics = () => {
	const [activeCard, setActiveCard] = useState(null);

	const hoverReveal = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeInOut"
			}
		}
	};

	const staggerGrid = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2
			}
		}
	};

	const overlayVariants = {
		hidden: { opacity: 0, x: "-100%" },
		visible: { opacity: 1, x: 0 }
	};

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 }
	};

	return (
		<div className="h-auto text-white">
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:flex w-full"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={staggerGrid}
			>
				{[0, 1, 2, 3].map((index) => (
					<motion.div
						key={index}
						className="w-full relative flex justify-center items-center overflow-hidden"
						variants={hoverReveal}
						onHoverStart={() => setActiveCard(index)}
						onHoverEnd={() => setActiveCard(null)}
						onClick={() => setActiveCard(activeCard === index ? null : index)}
					>
						<img
							src={["leadership.png", "mentor.png", "investor.png", "educator.png"][index]}
							alt=""
							className="w-full object-cover h-[459px]"
						/>
						<motion.div
							className="absolute inset-0 bg-black bg-opacity-90"
							initial="hidden"
							animate={activeCard === index ? "visible" : "hidden"}
							variants={overlayVariants}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						/>
						<motion.p
							initial="hidden"
							animate={activeCard === index ? "visible" : "hidden"}
							variants={textVariants}
							transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
							className="absolute top-16 font-work text-left text-3xl font-[500] sm:leading-[35px] md:leading-[40px] w-[80%] text-white"
						>
							{[
								"Experience the power of Iyke's storytelling and insights live. Explore upcoming events and discover how his words can inspire action and change.",
								"Join Iyke in exclusive masterclasses that challenge the norm and elevate your expertise. Transform your understanding and apply new strategies to succeed.",
								"Become part of a community of like-minded individuals. Gain access to mentorship, resources, and a community designed to fuel your growth.",
								"Dive into a rich resource teaching of Amb Iyke Dike. Engage with thought leadership covering a spectrum of topics that pave the way forward."
							][index]}
						</motion.p>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:flex"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={staggerGrid}
			>
				<motion.div
					className="w-full block"
					variants={hoverReveal}
				>
					<p className="px-5 py-3 font-lato text-xl mt-4 mb-2 text-center lg:border-r-2" style={{ fontWeight: '600' }}>Leader</p>
					<img src='mentors.png' alt="Iyke Dike" className="w-full object-cover h-[459px]" />
				</motion.div>

				<motion.div
					className="w-full block"
					variants={hoverReveal}
				>
					<p className="px-5 py-3 font-lato font-bold text-xl mt-4 mb-2 text-center lg:border-r-2" style={{ fontWeight: '600' }}>Mentor</p>
					<img src="lead.png" alt="Iyke Dike" className="w-full object-cover h-[459px]" />
				</motion.div>

				<motion.div
					className="w-full block"
					variants={hoverReveal}
				>
					<p className="px-5 py-3 font-lato font-bold text-xl mt-4 mb-2 text-center lg:border-r-2" style={{ fontWeight: '600' }}>Investor</p>
					<img src="smiles.png" alt="Iyke Dike" className="w-full object-cover h-[459px]" />
				</motion.div>

				<motion.div
					className="w-full block"
					variants={hoverReveal}
				>
					<p className="px-5 py-3 font-lato font-bold text-xl mt-4 mb-2 text-center" style={{ fontWeight: '600' }}>Educator</p>
					<img src="educator.png" alt="Iyke Dike" className="w-full object-cover h-[459px]" />
				</motion.div>
			</motion.div>

			<motion.div
				className="block lg:flex"
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
				<img src="iy.jpg" alt="" className="w-full object-cover" />
				<img src="ke.jpg" alt="" className="w-full object-cover" />
			</motion.div>
		</div>
	);
};

export default Graphics;
