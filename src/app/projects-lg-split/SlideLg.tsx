import useAppSelector from '../hooks/useAppSelector'
import Image from 'next/image'
import { motion } from 'framer-motion'

type SlideProps = {
	id: number
	img: string
}

const SlideLg = (props: SlideProps) => {
	const { id, img } = props
	const currentCardId = useAppSelector((state) => state.projectCardHover.cardId)

	const initial = { opacity: 0, y: 0, width: '20vw' }
	const animate = { width: id === currentCardId ? '100vw' : '20vw' }
	const inViewAnimation = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.73, 0.06, 0.42, 0.835],
		},
	}
	const viewPort = { once: true }
	const transition = { duration: 0.3, ease: [0.73, 0.06, 0.42, 0.835] }

	return (
		<motion.div
			initial={initial}
			whileInView={inViewAnimation}
			animate={animate}
			viewport={viewPort}
			transition={transition}
			className='w-[20vw] h-[90vh] whitespace-nowrap break-normal'>
			<Image
				src={img}
				alt={img}
				width={1000}
				height={1000}
				priority
				className='w-full h-full object-cover rounded-xl'
			/>
		</motion.div>
	)
}

export default SlideLg
