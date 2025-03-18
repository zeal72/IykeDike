import React from 'react';
import CoreBeliefs from './CoreBelief';

const CareerJourney = () => {
	return (<>
		{/* Main container */}
		<div className=" flex flex-col lg:flex-row items-start w-full text-white overflow-hidden shadow-lg">
			{/* Image Section */}
			<div className="w-full lg:w-[518px] h-[598px] lg:h-auto">
				<img
					src="iyke2.png"
					alt="Career Journey"
					className="w-full h-full object-cover object-center"
					loading="lazy"
				/>
			</div>

			{/* Text Section */}
			<div className="CareerJourney flex-1 lg:min-h-fit px-6 sm:px-8 md:px-10 lg:px-12 bg-[#111135] flex flex-col justify-center items-center">
				<div className="flex justify-center items-center mb-8 w-full sm:mt-6 lg:mt-0">
					<img
						className="w-auto max-w-full h-auto"
						src="subhead.png"
						alt="Career Journey Subhead"
						style={{ maxWidth: '80%' }}
					/>
				</div>

				<ul className="list-disc w-full list-inside space-y-4 font-lato font-medium leading-[1.4] tracking-normal"
					style={{
						fontSize: 'clamp(0.9rem, 1.5vw + 0.5rem, 1.1rem)',
						fontWeight: 400,
						maxWidth: '52ch'
					}}>
					<li>
						Nick Dolly's journey began with a calling to select children and teenagers, picking them for dinner in their new garage. One of the most vital issues among these questions was finding an engaging young man who has been convinced and experienced to be released through the personal and professional lives.
					</li>
					<li>
						In 2009, Edholm’s account of alcohol consumption is considered first aid, not enough that he’d gotten the financial aid of some individuals to get the welfare payments from individuals who started his business until his career. His blog shows a lot of kids, including many of the friends, family, and community members. Since 2008 and 2010, Edholm’s blog has focused on social impacts, with particular attention to the years 2020 and 2011.
					</li>
					<li>
						In August education, he’s a passionate friend and partner at a tech firm weekly. He has worked hard to recognize it as part of his research and experience in law delivery, helping with future working roles such as put-in balance or child collaboration by 2022.
					</li>
				</ul>
			</div>
		</div>
		<CoreBeliefs />
	</>

	);
};

export default CareerJourney;
