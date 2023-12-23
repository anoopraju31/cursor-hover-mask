'use client'

import { MotionValue, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

type SlideProps = {
	color: string
	id: number
	progress: MotionValue<number>
	range: number[]
	targetScale: number
	img: string
}

const Slide = (props: SlideProps) => {
	const { color, id, progress, range, targetScale, img } = props
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div className='w-full px-[10px] h-screen flex justify-center items-center sticky top-0'>
			<motion.div
				style={{ background: color, top: `calc(-0% + ${id * 35}px)`, scale }}
				className='w-full h-[60%] relative rounded-2xl'>
				<div className='w-full h-full'>
					<Image fill src={img} alt={img} className='object-cover rounded-xl' />
				</div>
			</motion.div>
		</div>
	)
}

export default Slide
