'use client'

import { MotionValue, useTransform, motion } from 'framer-motion'
import useWindowWidth from '../hooks/useWindowWidth'
import useAppDispatch from '../hooks/useAddDispatch'
import {
	projectCardMouseEnter,
	projectCardMouseLeave,
} from '../features/projectCardSlice'

type MaskSlideProps = {
	id: number
	progress: MotionValue<number>
	range: number[]
	targetScale: number
}

const SlideMask = (props: MaskSlideProps) => {
	const { id, progress, range, targetScale } = props
	const scale = useTransform(progress, range, [1, targetScale])
	const { isDesktopSize } = useWindowWidth()
	const dispatch = useAppDispatch()

	const handleCardHoverStart = (id: number) =>
		dispatch(projectCardMouseEnter(id))
	const handleCardHoverEnd = () => dispatch(projectCardMouseLeave())

	const animationInitial = isDesktopSize ? { width: '20vw' } : { width: '100%' }
	const animateOnhover = isDesktopSize ? { width: '100vw' } : { width: '100%' }

	if (isDesktopSize)
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

	return (
		<div className='w-full px-[10px] h-screen flex justify-center items-center sticky top-0'>
			<motion.div
				style={{ top: `calc(-0% + ${id * 35}px)`, scale }}
				className='w-full h-[60%] relative rounded-2xl'>
				<div className='w-full h-full'></div>
			</motion.div>
		</div>
	)
}

export default SlideMask
