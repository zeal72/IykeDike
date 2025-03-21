import React from 'react'

const Services = () => {
	return (
		<>
			<div className="w-full  bg-[#040318] mx-auto">
				{/* <h1 className="text-white text-4xl font-bold">Services</h1> */}
				<img src="servicebanner.png" alt="" className='w-full h-auto object-cover' />
			</div>
			<div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-5 lg:gap-4 xl:gap-16 bg-white text-gray-800 w-full px-6 py-8 md:px-12 md:py-16 welcome-section">
				{/* Image Section */}
				<div className="w-full md:w-[80%] xl:w-[40%] lg:w-1/2 flex justify-center">
					<img src="serviceestate.png" alt="Real Estate Services" className="w-full object-cover" />
				</div>

				{/* Content Section */}
				<div className="w-full md:w-[80%] lg:w-1/2 max-w-2xl space-y-4 mt-8 md:mt-0">
					<h2 className="text-2xl font-bold md:text-4xl text-center">Real Estate</h2>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Property Consultation:</span> Expert valuation, market trend analysis, and tailored investment strategies for all buyers.
					</p>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Investment Guidance:</span> Strategic market analysis to identify and capitalize on profitable real estate ventures.
					</p>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Transaction Support:</span> Comprehensive guidance through buying or selling processes, from negotiation to closing.
					</p>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Market Analysis:</span> Detailed market insights and projections for informed real estate decisions.
					</p>
				</div>
			</div>
			<div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-5 lg:gap-4 xl:gap-16 bg-[#040318] text-gray-200 w-full px-6 py-8 md:px-12 md:py-16 welcome-section">
				{/* Image Section */}
				<div className="w-full md:w-[80%] xl:w-[40%] lg:w-1/2 flex justify-center">
					<img src="serviceconsultant.png" alt="Real Estate Services" className="w-full object-cover" />
				</div>

				{/* Content Section */}
				<div className="w-full md:w-[80%] lg:w-1/2 max-w-2xl text-center space-y-4 mt-8 md:mt-0">
					<h2 className="text-2xl font-bold md:text-4xl text-center">Educational Consultant</h2>
					<p className="font-lato font-bold mx-auto text-sm md:text-base lg:w-[75%]">
						I provide expert guidance to schools, aiding in improved results. By careful study and joint planning, I craft custom fixes to nurture a lively learning atmosphere. My work covers updating lessons, training teachers, and using data to make things better. This ensures lasting, effective educational places where students and schools flourish.
					</p>

				</div>
			</div>
			<div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-5 lg:gap-4 xl:gap-16 bg-[#03033A] text-gray-200 w-full px-6 py-8 md:px-12 md:py-16 welcome-section">
				{/* Image Section */}
				<div className="w-full md:w-[80%] xl:w-[40%] lg:w-1/2 flex justify-center">
					<img src="servicementorship.png" alt="Real Estate Services" className="w-full object-cover" />
				</div>

				{/* Content Section */}
				<div className="w-full md:w-[80%] lg:w-1/2 max-w-2xl text-start space-y-4 mt-8 md:mt-0">
					<h2 className="text-2xl font-bold md:text-4xl text-center">Mentorship/Leadership </h2>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Professional Development:</span> Enhance your professional skills and advance your career with personalized mentorship. I'll help you identify your strengths, develop new skills, and achieve your goals.
					</p>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Career Goals:</span> Unlock your full potential with guidance on personal development. I'll help you build confidence, overcome challenges, and achieve a balanced and fulfilling life.
					</p>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Strategic Guidance:</span> Develop and implement effective strategies for personal and professional success. I will help you to define your goals, create action plans, and achieve your objectives.
					</p>
					<p className="font-lato font-bold text-sm md:text-base">
						<span className="text-lg font-extrabold">Ethical Leadership: </span>
						Cultivate strong ethical leadership skills and make a positive impact. I will help you to develop your leadership potential and lead with integrity.
					</p>
				</div>
			</div>

		</>
	)
}

export default Services