'use client'

import useAppDispatch from '../hooks/useAddDispatch'
import { motion } from 'framer-motion'
import {
	projectCardMouseEnter,
	projectCardMouseLeave,
} from '../features/projectCardSlice'

type SlideLgMaskProps = {
	id: number
}

const SlideLgMask = (props: SlideLgMaskProps) => {
	const { id } = props
	const dispatch = useAppDispatch()
	const animationInitial = { width: '20vw' }
	const animateOnhover = { width: '100vw' }
	const handleCardHoverStart = (id: number) =>
		dispatch(projectCardMouseEnter(id))
	const handleCardHoverEnd = () => dispatch(projectCardMouseLeave())

	return (
		<motion.div
			initial={animationInitial}
			whileHover={animateOnhover}
			transition={{ duration: 0.3, ease: [0.73, 0.06, 0.42, 0.835] }}
			onHoverStart={() => handleCardHoverStart(id)}
			onHoverEnd={handleCardHoverEnd}
			className='w-[20vw] h-[90vh] whitespace-nowrap break-normal'
		/>
	)
}

export default SlideLgMask
