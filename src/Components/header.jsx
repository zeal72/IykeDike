import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
		document.body.classList.toggle("overflow-hidden", isOpen);
	};

	return (
		<header className="w-full   fixed top-0 left-0 z-50">
			<nav
				className="container mx-auto mt-6 flex justify-between items-center
          bg-gray-900 border border-gray-700 rounded-full px-6 py-3
          shadow-[0px_6px_9px_rgba(0,0,0,0.6), 0px_2px_3px_rgba(0,0,0,0.12), 0px_1px_1px_rgba(0,0,0,0.04)]
          backdrop-blur-[40px] w-[90%] md:w-[90%] lg:w-[65%] max-w-[1200px]"
				style={{
					// width: "90%",
					// maxWidth: "1200px",
					height: "auto",
					borderRadius: "80px",
					borderWidth: "1px",
					borderImageSource:
						"linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
					background:
						"linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
					boxShadow:
						"0px 6px 9px rgba(0,0,0,0.6), 0px 2px 3px rgba(0,0,0,0.12), 0px 1px 1px rgba(0,0,0,0.04)",
				}}
			>
				{/* Logo */}
				<a href="#" className="text-white">
					<img src="./logo.png" alt="Iyke Dike Logo" className="h-10 md:h-12" />
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-4 md:space-x-2 lg:space-x-3 xl:space-x-11">
					{["Home", "About", "Services", "Projects", "Trypreneur", "Blog", "Contact"].map((item) => (
						<a
							key={item}
							href="#"
							className="text-white text-sm lg:text-base font-medium tracking-wide hover:text-gray-300 transition"
						>
							{item}
						</a>
					))}
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
						{["Home", "About", "Services", "Projects", "Trypreneur", "Blog", "Contact"].map((item) => (
							<a
								key={item}
								href="#"
								className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition"
							>
								{item}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
