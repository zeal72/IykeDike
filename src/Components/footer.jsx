import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="container mx-auto relative flex flex-col items-center sm:py-8 md:py-10 lg:px-0 xl:px-6 backdrop-blur-md rounded-xl">
			<div className="relative w-full flex justify-center">
				<img src="/Group 23.png" alt="Logo" className="hidden lg:block" />

				<div className="absolute inset-0 flex flex-col lg:flex-row items-center px-6 sm:px-11 justify-between space-y-6 sm:space-y-0">
					<ul className="flex flex-wrap justify-center lg:ps-0 xl:ps-14 space-x-3 sm:space-x-6 text-gray-200 list-none text-sm sm:text-sm md:text-[14.17px] font-lato font-bold tracking-[0%]">
						<Link to="/" className="hover:text-white transition duration-300 cursor-pointer">Home</Link>
						<div className="relative group">
							<div className="hover:text-white transition duration-300 cursor-pointer">About</div>
							<div className="absolute left-1/2 h-auto p-4 group transform -translate-x-1/2 hidden group-hover:block pointer-events-auto">
								<div className="w-auto h-auto bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-lg border border-gray-700">
									<ul className="text-gray-200 flex flex-col ps-4 pe-4 pt-2 pb-3 space-y-1">
										<Link to="/about">
											<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition">About Mr Iyke</li>
										</Link>
										<Link to="/estate">
											<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition">Real Estate</li>
										</Link>
										<Link to="/leadership">
											<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition">Leadership/Mentorship</li>
										</Link>
									</ul>
								</div>
							</div>
						</div>
						<Link to="/services" className="hover:text-white transition duration-300 cursor-pointer">Services</Link>
						<Link to="/blog" className="hover:text-white transition duration-300 cursor-pointer">Blog</Link>
						<Link to="/contact" className="hover:text-white transition duration-300 cursor-pointer">Contact</Link>
					</ul>

					<article className="flex flex-col lg:flex-col items-center lg:items-end gap-4 sm:gap-6 w-full max-w-xl">
						<h6 className="text-gray-300 text-center sm:text-start lg:text-end text-sm sm:text-lg md:text-lg font-inter font-normal w-full sm:w-auto sm:pb-3 md:pb-0 md:pt-4 lg:pt-0">
							@info@Abmyke001.com
						</h6>
						<div className="w-full max-w-lg min-w-[250px] flex items-center sm:mt-3.5 md:mt-0 md:mb-2 lg:mt-0 border rounded-full border-gray-500 bg-white/10 backdrop-blur-md p-1 sm:p-2">
							<input
								type="text"
								className="text-white bg-transparent py-2 sm:py-3 px-3 sm:px-5 focus:outline-none w-full placeholder-gray-400    sm:text-sm md:text-base rounded-full"
								placeholder="Your message..."
							/>
							<button
								type="button"
								className="bg-[#ffffff] text-gray-700 rounded-full py-2 sm:py-3 px-4 sm:px-6 hover:bg-[#dadae0be] transition duration-300 transform hover:scale-105 text-sm sm:text-sm md:text-base whitespace-nowrap flex-shrink-0"
							>
								Drop a message
							</button>
						</div>
					</article>
				</div>
			</div>

			<div className="container mx-auto mt-40 lg:mt-0 sm:pt-24 md:pt-6 pb-8 sm:pb-12 px-4 lg:px-24 sm:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
					<p className="text-sm sm:text-sm md:text-[14.17px] font-inter font-medium text-gray-300 order-2 sm:order-1">
						© 2025 Amb Iyke Dike. All rights reserved.
					</p>
					<div className="flex justify-center gap-4 sm:gap-5 order-1 sm:order-2">
						<FaFacebookF className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" />
						<FaInstagram className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" />
						<FaTiktok className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" />
						<FaLinkedinIn className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" />
					</div>
					<div className="text-sm sm:text-sm md:text-[14.17px] mx-auto font-inter font-medium text-gray-300 order-3 sm:order-3 flex gap-4">
						<p> Privacy policy</p>
						<p> Terms Of Service</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
