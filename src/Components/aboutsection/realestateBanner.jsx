import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RealEstateBanner = () => {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // Reduced parallax intensity

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
				delayChildren: 0.2 // Added stagger delay
			},
		},
	};

	return (
		<section className="mt-20 md:mt-24 lg:mt-28">
			<motion.div
				className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden"
				style={{ y }}
			>
				<img
					src="estate flyer.png"
					alt="Real Estate Banner"
					className="w-full h-full object-cover object-center"
					loading="eager"
				/>
			</motion.div>
		</section>
	);
};

export default RealEstateBanner;
