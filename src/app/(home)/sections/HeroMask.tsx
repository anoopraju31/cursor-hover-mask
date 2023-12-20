'use client'

import { mouseEnter, mouseLeave } from '@/app/features/textHoverSlice'
import useAppDispatch from '@/app/hooks/useAddDispatch'
import React from 'react'

const HeroMask = () => {
	const dispatch = useAppDispatch()

	const handleMouseEnter = () => dispatch(mouseEnter())
	const handleMouseLeave = () => dispatch(mouseLeave())

	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<h1
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className='text-7xl'>
				{' '}
				Hero Mask Section{' '}
			</h1>
		</div>
	)
}

export default HeroMask
