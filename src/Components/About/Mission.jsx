import React from 'react';

const Mission = () => {
	return (
		<div className="w-full flex items-center mb-28 bg-gray-100">
			{/* Main container */}
			<div className="flex flex-col lg:flex-row items-start w-full text-white overflow-hidden shadow-lg">
				{/* Text Section */}
				<div className="flex-1 lg:min-h-fit px-6 sm:py-5 md:py-5 lg:h-[598px] lg:py-0 lg:px-12 bg-[#111135] flex flex-col justify-center items-center">
					<div className="flex justify-center items-center mb-8 w-full sm:mt-6 lg:mt-0">
						<img
							className="w-auto mt-6 max-w-full h-auto"
							src="mission.png"
							alt="Mission Statement"
							style={{ maxWidth: '80%' }}
						/>
					</div>

					<ul className="list-disc list-inside space-y-4 font-lato font-medium leading-[1.4] tracking-normal">
						<li>
							Iyke Dike is on a mission to empower and equip young people through purpose-driven education, leveraging innovative real estate development and the Edubase school system to provide accessible, high-quality learning environments. Through these platforms, we aim to bridge the knowledge gap, nurture leadership, and prepare the next generation for impact in both the marketplace and society.
						</li>
						<li>
							This mission is powered by the vision of building a transformative educational system that empowers young people to discover and fulfill their purpose, equipping them with knowledge and skills for marketplace relevance, while influencing policy and governance to create opportunities for youth development and societal progress.
						</li>
						<li>
							They rest on a set of values termed PRICOC - Persistence - Resilience - Innovation - Curiosity - Optimism - Courage. In August education, he’s a passionate friend and partner at a tech firm weekly. He has worked hard to recognize it as part of his research and experience in law delivery, helping with future working roles such as put-in balance or child collaboration by 2022.
						</li>
					</ul>
				</div>

				{/* Image Section */}
				<div className="w-full lg:w-[518px] h-[598px] lg:h-auto">
					<img
						src="iyke3.png"
						alt="Mission Journey"
						className="w-full h-full object-cover object-center"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default Mission;
