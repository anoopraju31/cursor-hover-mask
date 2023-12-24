'use client'

import { MotionValue, useTransform, motion } from 'framer-motion'

type MaskSlideProps = {
	id: number
	progress: MotionValue<number>
	range: number[]
	targetScale: number
}

const SlideMask = (props: MaskSlideProps) => {
	const { id, progress, range, targetScale } = props
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div className='w-full px-[10px] h-screen flex justify-center items-center sticky top-0'>
			<motion.div
				style={{ top: `calc(-0% + ${id * 35}px)`, scale }}
				className='w-full h-[60%] relative rounded-2xl'></motion.div>
		</div>
	)
}

export default SlideMask
