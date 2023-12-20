'use client'

import { mouseEnter, mouseLeave } from '@/app/features/textHoverSlice'
import useAppDispatch from '@/app/hooks/useAddDispatch'

const ContactMask = () => {
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
				Contact Mask Section{' '}
			</h1>
		</div>
	)
}

export default ContactMask
