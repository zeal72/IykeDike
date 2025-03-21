import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Edubase = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

	return (
		<section className="bg-[#040318] mb-5 w-ful mb-l overflow-hidden">
			{/* Hero Image */}
			<motion.div className="w-full mt-32">
				<img
					src='EdubaseBanner.png'
					alt="About Hero Image"
					className="h-auto w-full max-h-[55vh] md:max-h-[65vh] object-contain"
				/>
			</motion.div>

			{/* Welcome Section */}
			<div className="flex flex-col justify-center text-center text-white w-full items-center px-6 py-16 welcome-section">
				<div className="w-full max-w-6xl">
					<h1 className="text-2xl font-bold leading-snug md:text-4xl">
						Welcome to the Official Site of <br className="hidden sm:block" /> AMB Iyke Dike
					</h1>
					<p className="text-lg font-bold md:text-xl mt-4">
						Learn more about the life, exploits, and ventures of AMB Iyke Dike in Real Estate.
					</p>
				</div>
			</div>

			{/* Career Journey Section */}
			<div className="flex flex-col bg-gray-100 shadow-lg text-white w-full lg:flex-row">
				{/* Left Section */}
				<div className="flex flex-1 flex-col bg-[#191746] justify-center p-6 text-center lg:p-24 lg:text-left min-h-full">
					<img src='Education section.png' alt="Real Estate Section" className="w-full lg:mx-0 max-w-md mx-auto" />
					<img src='Edutext.png' alt="" className="w-[250%] lg:w-auto mt-6 mx-auto" />
				</div>

				{/* Right Section (Fixed Height Issue) */}
				<div className="flex-1 h-full">
					<img src='educationedubase.png' alt="Career Journey" className="h-full w-full object-cover" />
				</div>
			</div>

			{/* Explore Edubase Button */}
			<div className="flex justify-center py-10">
				<button className="flex bg-[#191746] rounded-full shadow-lg text-lg text-white gap-2 items-center px-6 py-3">
					<a href="#" className="flex gap-2 items-center">Explore Edubase Academy <FaArrowRight /></a>
				</button>
			</div>

			{/* Full-Width Images */}
			<div className="grid grid-cols-1 w-full sm:grid-cols-2">
				<img src="Edustudent1.png" alt="" className="h-auto w-full object-cover" />
				<img src="Edustudent2.png" alt="" className="h-auto w-full object-cover" />
			</div>

			{/* Last Section */}
			<div className="bg-white text-black text-center px-6 py-16">
				<h1 className="text-2xl font-bold leading-snug md:text-4xl">
					NURTURE BRIGHT FUTURES WITH <br /> EXPERT CARE AND A VIBRANT COMMUNITY
				</h1>
				<p className="text-lg font-medium max-w-3xl mt-4 mx-auto">
					At EDUBASE INTERNATIONAL SCHOOL, our focus is on guiding young minds through the exciting journey of learning and discovery. With dedicated teachers, a welcoming school community, and innovative learning tools, your child will have everything they need to thrive. We also provide individualized attention to ensure every step of their educational path is met with support and encouragement.
				</p>
			</div>

			{/* Graduant Section */}
			<div className="w-full">
				<img src="Students.png" alt="" className="h-auto w-full object-cover" />
			</div>

			{/* Last Images */}
			{/* <div className="grid grid-cols-1 h-[400px] w-full lg:h-[600px] sm:grid-cols-2 sm:h-[500px]">
        <img src={AMBimg1} alt="" className="h-full w-full object-cover" /><img src={AMBimg2} alt="" className="h-full w-full object-cover" />
      </div> */}

			{/* Last Images */}
			<div className="flex flex-col justify-center w-full items-center mb- mngap-4 sm:flex-row">
				<img src="amb.png" alt="" className="h-full w-full object-cover" />
				<img src="ambimg2.png" alt="" className="h-full w-full object-cover" />
			</div>
		</section>
	);
};

export default Edubase;