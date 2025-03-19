import React from 'react'
import './../../App.css'
import './../../index.css';
import AboutHero from './About_hero';
import Biography from './Biography';
import CareerJourney from './Career';
import CoreBeliefs from './CoreBelives';
import Mission from './Mission';

const Aboutpage = () => {
	return (
		<>
			<div className='bg-[#040318] '>
				<AboutHero />
				<Biography />
				<CareerJourney />
				<CoreBeliefs />
				<Mission />
			</div>

		</>
	)
}

export default Aboutpage