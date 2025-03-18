import React from 'react'
import Form from './contact'
import Hero from './hero'

import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";
const Contactpage = () => {
	return (
		<div>
			<Hero />
			<Form />
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
		</div>
	)
}

export default Contactpage