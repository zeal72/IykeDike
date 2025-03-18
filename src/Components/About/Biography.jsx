import React from 'react';
import { motion } from 'framer-motion';

const Biography = () => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const scaleIn = {
		hidden: { scale: 0.9, opacity: 0 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
	};

	const staggerChildren = {
		visible: { transition: { staggerChildren: 0.2 } },
	};

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<motion.div
				className="w-full flex flex-col items-center py-12 md:py-16 lg:py-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				variants={staggerChildren}
			>
				<div className="w-full max-w-6xl flex flex-col items-center gap-6 md:gap-8">
					{/* Image with constrained sizing */}
					<motion.img
						src="/iyke.png"
						alt="Biography Image"
						className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-auto rounded-lg shadow-xl"
						variants={fadeInUp}
						loading="lazy"
					/>

					{/* Animated Button Image */}
					<motion.div
						className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px]"
						variants={scaleIn}
					>
						<img
							src="subhead.png"
							alt="Biography Button"
							className="w-full h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
						/>
					</motion.div>

					{/* Optimized Text Content */}
					<motion.p
						className="text-gray-300 text-center text-balance"
						style={{
							fontFamily: 'Lato, sans-serif',
							fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.5rem)',
							lineHeight: 1.6,
							fontWeight: 400,
							maxWidth: '52ch',
						}}
						variants={fadeInUp}
					>
						Iyke Dike is a visionary leader, educator, and entrepreneur dedicated to nurturing purpose and fostering innovation in the lives of young people. With a mission deeply rooted in closing the knowledge gap and empowering the next generation of leaders, Iyke leverages his diverse experiences in education, real estate, and mentorship to inspire sustainable growth in the marketplace and beyond.
					</motion.p>
				</div>
			</motion.div>
		</div>
	);
};

export default Biography;
