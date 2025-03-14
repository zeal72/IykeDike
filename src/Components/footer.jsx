import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<footer className="container mx-auto relative flex flex-col items-center sm:py-8 md:py-10 lg:px-0 xl:px-6 backdrop-blur-md rounded-xl">
				{/* Image as Background (Hidden on Mobile) */}
				<div className="relative w-full flex justify-center">
					<img src="/Group 23.png" alt="Logo" className="hidden lg:block" />

					{/* Centered Content */}
					<div className="absolute inset-0 flex flex-col lg:flex-row items-center px-6 sm:px-11 justify-between space-y-6 sm:space-y-0">
						{/* Navigation Links */}
						<ul className="flex flex-wrap justify-center lg:ps-0 xl:ps-14 space-x-3 sm:space-x-6 text-gray-200 list-none text-xs sm:text-sm md:text-[14.17px] font-lato font-bold tracking-[0%]">
							{["About", "Services", "Projects", "Blog", "Contact"].map((item) => (
								<li key={item} className="hover:text-white transition duration-300 cursor-pointer mb-2 sm:mb-0">
									{item}
								</li>
							))}
						</ul>

						{/* Contact Input Section */}
						<article className="flex flex-col lg:flex-col items-center lg:items-end gap-4 sm:gap-6 w-full max-w-xl">
							<h6 className="text-gray-300 text-center sm:text-start lg:text-end text-sm sm:text-lg md:text-lg font-inter font-normal w-full sm:w-auto sm:pb-3 md:pb-0 md:pt-3 lg:pt-0">
								@info@Abmyke001.com
							</h6>

							<div className="w-full max-w-lg min-w-[250px] flex items-center sm:mt-3.5 md:mt-0 md:mb-2 lg:mt-0 border rounded-full border-gray-500 bg-white/10 backdrop-blur-md p-1 sm:p-2">
								<input
									type="text"
									className="text-white bg-transparent py-2 sm:py-3 px-3 sm:px-5 focus:outline-none w-full placeholder-gray-400 text-xs sm:text-sm md:text-base rounded-full"
									placeholder="Your message..."
								/>
								<button
									type="button"
									className="bg-[#ffffff] text-gray-700 rounded-full py-2 sm:py-3 px-4 sm:px-6 hover:bg-[#dadae0be] transition duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0"
								>
									Drop a message
								</button>
							</div>
						</article>

					</div>
				</div>
			</footer>

			{/* Bottom Footer Section */}
			<div className="container mx-auto mt-40 lg:mt-0 sm:pt-24 md:pt-2 pb-8 sm:pb-12 px-4 lg:px-24 sm:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
					{/* Copyright Text */}
					<p className="text-xs sm:text-sm md:text-[14.17px] font-inter font-medium text-gray-300 order-2 sm:order-1">
						© 2025 Amb Iyke Dike. All rights reserved.
					</p>

					{/* Social Media Icons */}
					<div className="flex justify-center gap-4 sm:gap-5 order-1 sm:order-2">
						<FaFacebookF className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" size={18} />
						<FaInstagram className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" size={18} />
						<FaTiktok className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" size={18} />
						<FaLinkedinIn className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" size={22} />
					</div>

					{/* Privacy Policy */}
					<p className="text-gray-300 sm:text-right hover:text-white cursor-pointer text-xs sm:text-sm md:text-[14.17px] font-inter font-medium order-3">
						Privacy Policy | Terms of Service
					</p>
				</div>
			</div>
		</>
	);
}
