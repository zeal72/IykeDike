import React, { useState, useEffect, useRef } from "react";

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		listener(); // Initial check
		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
};

export const Slider = () => {
	const testimonials = [
		{ id: 1, image: "/Image.png" },
		{ id: 2, image: "/Image.png" },
		{ id: 3, image: "/Image.png" },
		{ id: 4, image: "/Image.png" },
		{ id: 5, image: "/Image.png" },
		{ id: 6, image: "/Image.png" },
		{ id: 7, image: "/Image.png" },
		{ id: 8, image: "/Image.png" },
	];

	// Media queries for different screen sizes
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
	const isMobile = useMediaQuery("(max-width: 639px)");

	const [activeIndex, setActiveIndex] = useState(0);
	const sliderRef = useRef(null);

	// Create different groupings based on screen size
	const groupedTestimonials = isDesktop
		? testimonials.reduce((acc, _, i) => {
			if (i % 4 === 0) acc.push(testimonials.slice(i, i + 4));
			return acc;
		}, [])
		: isTablet
			? testimonials.reduce((acc, _, i) => {
				if (i % 2 === 0) acc.push(testimonials.slice(i, i + 2));
				return acc;
			}, [])
			: testimonials.map(item => [item]); // Single items for mobile

	useEffect(() => {
		setActiveIndex(0); // Reset index on screen size change
	}, [isDesktop, isTablet, isMobile]);

	useEffect(() => {
		if (groupedTestimonials.length === 0) return;

		const interval = setInterval(() => {
			setActiveIndex(prev => (prev + 1) % groupedTestimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [groupedTestimonials.length, isDesktop, isTablet, isMobile]);

	if (groupedTestimonials.length === 0) return null;

	return (
		<div className="relative overflow-hidden container mx-auto px-4 py-10">
			{/* Slider Container */}
			<div
				ref={sliderRef}
				className="flex transition-transform duration-300 ease-in-out"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{groupedTestimonials.map((group, groupIndex) => (
					<div
						key={groupIndex}
						className="flex-shrink-0 w-full grid gap-4"
						style={{
							gridTemplateColumns: isDesktop
								? "repeat(4, minmax(0, 1fr))"
								: isTablet
									? "repeat(2, minmax(0, 1fr))"
									: "repeat(1, minmax(0, 1fr))"
						}}
					>
						{group.map((item) => (
							<div
								key={item.id}
								className="h-auto p-2"
							>
								<img
									src={item.image}
									alt="Testimonial"
									className="w-full h-[250px] md:h-[380px] lg:h-[491px] object-cover rounded-lg shadow-lg"
								/>
							</div>
						))}
					</div>
				))}
			</div>

			{/* Dots Navigation */}
			<div className="absolute bottom-4 flex gap-2 left-1/2 -translate-x-1/2">
				{groupedTestimonials.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setActiveIndex(idx)}
						className={`w-3 h-3 rounded-full transition-all ${activeIndex === idx ? "bg-white scale-110" : "bg-gray-500"
							}`}
						aria-label={`Slide ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
};
