import React from 'react'
import HeroSection from './hero'
import Header from './header'
import MeetIyke from './meet'
import EmpowerSection from './legacy'
import AmbSection from './imagessection'
import TestimonialSection from './testimonial'
import ContactSection from './Contact'
import Footer from './footer'
// import Leadership from './Leadership/leadership'

const Home = () => {
	return (
		<>
			<div className="">
				{/* <Header /> */}
				<HeroSection />
				<MeetIyke />
				<EmpowerSection />
				<AmbSection />
				<TestimonialSection />
				<ContactSection />
				{/* <Leadership /> */}
				{/* <Footer /> */}
			</div>

		</>
	)
}

export default Home