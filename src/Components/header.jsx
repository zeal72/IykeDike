import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
		document.body.classList.toggle("overflow-x-hidden", isOpen);
	};

	const toggleMobileDropdown = () => {
		setMobileDropdownOpen((prev) => !prev);
	};

	const getLinkClass = (path) => {
		return `text-sm font-medium tracking-wide transition lg:text-base ${location.pathname === path ? "text-white font-[800]" : "text-gray-300 hover:text-white"
			}`;
	};

	return (
		<header className="w-full fixed left-0 top-0 z-50">
			<nav className="container mx-auto mt-6 flex justify-between items-center bg-gray-900 border border-gray-700 rounded-full px-8 py-3 shadow-[0px_6px_9px_rgba(0,0,0,0.6), 0px_2px_3px_rgba(0,0,0,0.12), 0px_1px_1px_rgba(0,0,0,0.04)] backdrop-blur-[40px] w-[90%] md:w-[80%] lg:w-[45%] max-w-[1200px]" style={{
				height: "auto",
				borderRadius: "80px",
				borderWidth: "1px",
				borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
				background: "linear-gradient(to right, #00011A, #170A1E)",
				boxShadow: "0px 6px 9px rgba(0,0,0,0.6), 0px 2px 3px rgba(0,0,0,0.12), 0px 1px 1px rgba(0,0,0,0.04)",
			}}>
				<Link to="/" className="text-white">
					<img src="./logo.png" alt="Iyke Dike Logo" className="h-10 md:h-12" />
				</Link>
				<div className="hidden items-center lg:space-x-3 md:flex md:space-x-4 space-x-4 xl:space-x-7">
					<Link to="/" className={getLinkClass("/")}>Home</Link>
					<div className="group relative">
						<div className="text-sm text-gray-300 cursor-pointer font-medium hover:text-gray-300 lg:mb-0 lg:text-base tracking-wide transition">About</div>
						<div className="h-auto p-4 -translate-x-1/2 absolute group-hover:block hidden left-1/2 pointer-events-auto transform">
							<div className="bg-gradient-to-b border border-gray-700 h-auto rounded-xl shadow-lg w-auto from-gray-900 to-black">
								<ul className="flex flex-col text-gray-300 pb-3 pe-4 ps-4 pt-2 space-y-1">
									<Link to="/about"><li className={getLinkClass("/about")}>About Mr Iyke</li></Link>
									<Link to="/estate"><li className={getLinkClass("/estate")}>Real Estate</li></Link>
									<Link to='/leadership'><li className={getLinkClass("/leadership")}>Leadership/Mentorship</li></Link>
									<Link to='/edubase'><li className={getLinkClass("/edubase")}>Edubase</li></Link>
								</ul>
							</div>
						</div>
					</div>
					<Link to="/services" className={getLinkClass("/services")}>Services</Link>
					<Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
					<Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
				</div>
				<button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
					<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</nav>
			<div className={`fixed top-16 right-0 h-auto w-72 bg-[rgba(255,255,255,0.1)] border-l border-[rgba(255,255,255,0.2)] backdrop-blur-lg z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
				<div className="flex flex-col h-full p-6">
					<div className="flex justify-end mb-4">
						<button onClick={toggleMenu} className="text-white focus:outline-none">
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<nav className="flex flex-col flex-grow gap-y-4">
						<Link to="/" className={getLinkClass("/")}>Home</Link>
						<div>
							<button onClick={toggleMobileDropdown} className="flex justify-between text-lg text-white w-full font-medium items-center tracking-wide">About <span>{mobileDropdownOpen ? "▲" : "▼"}</span></button>
							{mobileDropdownOpen && (
								<div className="w-full mt-2">
									<div className="bg-gradient-to-b border border-gray-700 h-auto rounded-xl shadow-lg w-full from-gray-900 to-black">
										<ul className="flex flex-col justify-center text-gray-200 pb-3 pt-2">
											<Link to='/about'><li className={getLinkClass("/about")}>About Mr Iyke</li></Link>
											<Link to="/estate"><li className={getLinkClass("/estate")}>Real Estate</li></Link>
											<Link to='/leadership'><li className={getLinkClass("/leadership")}>Leadership/Mentorship</li></Link>
										</ul>
									</div>
								</div>
							)}
						</div>
						<Link to="/services" className={getLinkClass("/services")}>Services</Link>
						<Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
						<Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;