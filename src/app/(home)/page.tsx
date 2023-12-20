import React from 'react'
import { Contact, Hero, Projects } from './sections'
import MaskPage from './sections/MaskPage'
import RegularPage from './sections/RegularPage'

const Home = () => {
	return (
		<div className='relative'>
			<MaskPage />
			<RegularPage />
		</div>
	)
}

export default Home
