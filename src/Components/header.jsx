import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
		document.body.classList.toggle("overflow-x-hidden", isOpen);
	};

	const toggleMobileDropdown = () => {
		setMobileDropdownOpen((prev) => !prev);
	};

	return (
		<header className="w-full fixed top-0 left-0 z-50">
			<nav
				className="container mx-auto mt-6 flex justify-between items-center
          bg-gray-900 border border-gray-700 rounded-full px-6 py-3
          shadow-[0px_6px_9px_rgba(0,0,0,0.6), 0px_2px_3px_rgba(0,0,0,0.12), 0px_1px_1px_rgba(0,0,0,0.04)]
          backdrop-blur-[40px] w-[90%] md:w-[90%] lg:w-[65%] max-w-[1200px]"
				style={{
					height: "auto",
					borderRadius: "80px",
					borderWidth: "1px",
					borderImageSource:
						"linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
					background: "linear-gradient(to right, #00011A, #170A1E)",
					boxShadow:
						"0px 6px 9px rgba(0,0,0,0.6), 0px 2px 3px rgba(0,0,0,0.12), 0px 1px 1px rgba(0,0,0,0.04)",
				}}
			>
				{/* Logo */}
				<Link to="/" className="text-white">
					<img src="./logo.png" alt="Iyke Dike Logo" className="h-10 md:h-12" />
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-4 md:space-x-4 lg:space-x-3 xl:space-x-11 items-center ">
					<Link
						to="/"
						className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
					>
						Home
					</Link>

					{/* About Dropdown - Desktop */}
					<div className="relative group">
						{/* About Link */}
						<Link
							to="/about"
							className="text-white text-sm lg:text-base md:mb-2 lg:mb-0 font-medium tracking-wide hover:text-gray-300 transition"
						>
							About
						</Link>

						{/* Dropdown Content (Fix: Keep it open when hovering the dropdown) */}
						<div className="absolute left-1/2 h-auto p-4 group transform -translate-x-1/2 hidden group-hover:block pointer-events-auto">
							<div className="w-auto h-auto bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-lg border border-gray-700">
								<ul className="text-gray-200 flex flex-col ps-4 pe-4 pt-2 pb-3 space-y-1">
									<Link to="/about">
										<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition">About Mr Iyke</li>
									</Link>
									<Link to="/estate">
										<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition"> Real Estate</li>
									</Link>
									<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition">Leadership/Mentorship</li>
								</ul>
							</div>
						</div>
					</div>


					<Link
						to="services"
						className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
					>
						Services
					</Link>
					<Link
						to="projects"
						className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
					>
						Projects
					</Link>
					<Link
						to="trypreneur"
						className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
					>
						Trypreneur
					</Link>
					<Link
						to="blog"
						className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
					>
						Blog
					</Link>
					<Link
						to="contact"
						className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
					>
						Contact
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden text-white focus:outline-none"
				>
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`fixed top-16 right-0 h-auto w-72
          bg-[rgba(255,255,255,0.1)] border-l border-[rgba(255,255,255,0.2)] backdrop-blur-lg
          z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
					}`}
			>
				<div className="flex flex-col h-full p-6">
					{/* Close Button */}
					<div className="flex justify-end mb-4">
						<button
							onClick={toggleMenu}
							className="text-white focus:outline-none"
						>
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Mobile Nav Links */}
					<nav className="flex-grow flex flex-col gap-y-4">
						<Link to="/" className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition">Home</Link>

						{/* About Dropdown - Mobile */}
						<div>
							<button
								onClick={toggleMobileDropdown}
								className="text-white text-lg font-medium tracking-wide flex justify-between items-center w-full"
							>
								About
								<span>{mobileDropdownOpen ? "▲" : "▼"}</span>
							</button>

							{/* Dropdown Content */}
							{mobileDropdownOpen && (
								<div className="mt-2 w-full">
									<div className="w-full h-auto bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-lg border border-gray-700">
										<ul className="text-gray-200 flex flex-col justify-center ps-4 pt-2">
											<Link to='about'>
												<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition">About Mr Iyke </li>
											</Link>
											<Link to="/estate">
												<li className="hover:text-white hover:bg-gray-800 rounded-md px-3 py-1 transition"> Real Estate</li>
											</Link>
											<li>Leadership/mentorship </li>
										</ul>
									</div>
								</div>
							)}
						</div>

						<Link to="services" className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition">Services</Link>
						<Link to="projects" className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition">Projects</Link>
						<Link to="trypreneur" className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition">Trypreneur</Link>
						<Link to="blog" className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition">Blog</Link>
						<Link to="contact" className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition">Contact</Link>
					</nav>
				</div>
			</div >
		</header >
	);
};

export default Header;
