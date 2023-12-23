'use client'

import { MotionValue, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import useWindowWidth from '../hooks/useWindowWidth'
import useAppSelector from '../hooks/useAppSelector'

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
	const { isDesktopSize } = useWindowWidth()
	const currentCardId = useAppSelector((state) => state.projectCardHover.cardId)

	const initial = { opacity: 0, y: 0, width: isDesktopSize ? '20vw' : '100%' }
	const animate = isDesktopSize
		? { width: id === currentCardId ? '100vw' : '20vw' }
		: { width: '100%' }

	if (isDesktopSize)
		return (
			<motion.div
				initial={initial}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						ease: [0.73, 0.06, 0.42, 0.835],
					},
				}}
				animate={animate}
				viewport={{ once: true }}
				transition={{ duration: 0.3, ease: [0.73, 0.06, 0.42, 0.835] }}
				className='w-[20vw] h-[90vh] whitespace-nowrap break-normal'>
				<Image
					src={img}
					alt={img}
					width={1000}
					height={1000}
					className='w-full h-full object-cover rounded-xl'
				/>
			</motion.div>
		)

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
