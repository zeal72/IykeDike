import React from 'react'
import Aboutestate from './aboutestate'
import Realestatesection from './estate'
import Explore_RealEastate from './explorerealestate'
import RealEstateBanner from './realestateBanner'

const Realestate = () => {
	return (
		<div>
			<Aboutestate />
			<Realestatesection />
			<Explore_RealEastate />
			<RealEstateBanner />
		</div>
	)
}

export default Realestate