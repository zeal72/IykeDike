import React from 'react'
import HeroSection from './hero'
import Header from './header'
import MeetIyke from './meet'
import EmpowerSection from './legacy'
import AmbSection from './imagessection'
import TestimonialSection from './testimonial'
import ContactSection from './Contact'
import Footer from './footer'

const Home = () => {
	return (
		<>
			<div className=""
				style={{
					backgroundColor: "radial-gradient(71.53% 71.53% at 36.82% 92.34%, rgba(244, 94, 61, 0.15) 0%, rgba(244, 61, 237, 0) 100%)",
				}}>
				{/* <Header /> */}
				<HeroSection />
				<MeetIyke />
				<EmpowerSection />
				<AmbSection />
				<TestimonialSection />
				<ContactSection />
				<Footer />
			</div>

		</>
	)
}

export default Home