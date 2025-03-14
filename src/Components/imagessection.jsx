import React from "react";

const AmbSection = () => {
	return (
		<section className="bg-gradient-to-b from-[#15152e] via-[#040318] to-[#1c1c3c] min-h-screen flex items-center py-9 px-4">
			<div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-12 gap-4 items-center lg:items-end max-w-7xl">
				<div className="w-full flex mt-10 md:mt-0 ms-20 md:ms-0 justify-center lg:justify-end lg:col-span-9">
					<img
						src="./Frame 761.png"
						alt="AMB Iyke Dike"
						className="w-full lg:max-w-full object-cover rounded-lg"
					/>
				</div>
				<div className="px-3 lg:col-span-3 text-center lg:text-right">
					<h2 className="text-4xl font-bold text-white mb-7">AMB Iyke Dike</h2>
					<p className="text-white mt-4 w-full max-w-md text-lg leading-8 mx-auto lg:mx-0">
						"Empower young minds, create sustainable wealth, and inspire purposeful living. Together, we can transform lives and communities."
					</p>
					<div className="flex justify-center lg:justify-end mt-5">
						<button
							className="min-w-[140px] md:min-w-[160px] lg:min-w-[180px] h-[2.8rem] md:h-[3rem] lg:h-[3.2rem]  rounded-full border border-white/10 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)]  hover:bg-[#4a4a57] shadow-[0px_6px_12px_rgba(0,0,0,0.5),0px_3px_6px_rgba(0,0,0,0.3),0px_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center  px-4 md:px-6 lg:px-8 text-white font-medium text-[0.875rem] md:text-[1rem] lg:text-[1.125rem]  transition-all duration-300 cursor-pointer"
						>
							Read more
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AmbSection;
