import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Aboutestate = () => {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const scaleUp = {
		hidden: { scale: 0.95, opacity: 0 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2
			},
		},
	};

	return (
		<section className="mt-20 md:mt-24 lg:mt-28">
			{/* Hero Image Section */}
			<motion.div
				className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden"
				style={{ y }}
			>
				<img
					src="estate.png"
					alt="About Hero Image"
					className="w-full h-full object-cover object-center"
					loading="eager"
				/>
			</motion.div>

			{/* Content Section */}
			<motion.div
				className="w-full flex flex-col items-center text-center text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				variants={staggerContainer}
			>
				<div className="w-full max-w-6xl mx-auto flex flex-col items-center">
					<motion.h1
						className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-normal"
						variants={scaleUp}
						style={{
							lineHeight: 1.2,
							letterSpacing: '-0.025em'
						}}
					>
						Welcome to the Official Site of <br className="hidden sm:block" />
						<span className="whitespace-nowrap">AMB Iyke Dike</span>
					</motion.h1>

					<motion.p
						className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto"
						variants={fadeInUp}
						style={{
							lineHeight: 1.6
						}}
					>
						Learn more about the life, exploits and ventures of AMB Iyke Dike in Real Estate.
					</motion.p>
				</div>
			</motion.div>
		</section>
	);
};

export default Aboutestate;
