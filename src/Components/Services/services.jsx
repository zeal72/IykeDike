import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};


const Services = () => {
	return (
		<>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={fadeInUp}
				className="w-full bg-[#040318] mx-auto"
			>
				<img src="servicebanner.png" alt="" className='w-full h-auto object-cover' />
			</motion.div>

			{[{
				title: 'Real Estate',
				image: 'serviceestate.png',
				bg: 'bg-white',
				text: 'text-gray-800',
				details: [
					{ label: 'Property Consultation', desc: 'Expert valuation, market trend analysis, and tailored investment strategies for all buyers.' },
					{ label: 'Investment Guidance', desc: 'Strategic market analysis to identify and capitalize on profitable real estate ventures.' },
					{ label: 'Transaction Support', desc: 'Comprehensive guidance through buying or selling processes, from negotiation to closing.' },
					{ label: 'Market Analysis', desc: 'Detailed market insights and projections for informed real estate decisions.' },
				]
			}, {
				title: 'Educational Consultant',
				image: 'serviceconsultant.png',
				bg: 'bg-[#040318]',
				text: 'text-gray-200',
				details: [{ desc: 'I provide expert guidance to schools, aiding in improved results. By careful study and joint planning, I craft custom fixes to nurture a lively learning atmosphere. My work covers updating lessons, training teachers, and using data to make things better. This ensures lasting, effective educational places where students and schools flourish.' }]
			}, {
				title: 'Mentorship/Leadership',
				image: 'servicementorship.png',
				bg: 'bg-[#03033A]',
				text: 'text-gray-200',
				details: [
					{ label: 'Professional Development', desc: 'Enhance your professional skills and advance your career with personalized mentorship.' },
					{ label: 'Career Goals', desc: 'Unlock your full potential with guidance on personal development.' },
					{ label: 'Strategic Guidance', desc: 'Develop and implement effective strategies for personal and professional success.' },
					{ label: 'Ethical Leadership', desc: 'Cultivate strong ethical leadership skills and make a positive impact.' },
				]
			}].map((service, index) => (
				<div key={index} className={`flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-5 lg:gap-4 xl:gap-16 ${service.bg} ${service.text} w-full px-6 py-8 md:px-12 md:py-16 welcome-section`}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={index % 2 === 0 ? fadeInUp : fadeInUp}
						className="w-full md:w-[80%] xl:w-[40%] lg:w-1/2 flex justify-center"
					>
						<img src={service.image} alt={service.title} className="w-full object-cover" />
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="w-full md:w-[80%] lg:w-1/2 max-w-2xl space-y-4 mt-8 md:mt-0"
					>
						<h2 className="text-2xl font-bold md:text-4xl text-center">{service.title}</h2>
						{service.details.map((detail, i) => (
							<p key={i} className="font-lato font-bold text-sm md:text-base">
								{detail.label && <span className="text-lg font-extrabold">{detail.label}: </span>}
								{detail.desc}
							</p>
						))}
					</motion.div>
				</div>
			))}
		</>
	);
};

export default Services;
