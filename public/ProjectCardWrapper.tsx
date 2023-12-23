'use client'

import useAppSelector from '@/app/hooks/useAppSelector'
import { MotionValue, motion, useTransform } from 'framer-motion'
import styles from './styles.module.css'
import useWindowWidth from '@/app/hooks/useWindowWidth'

type ProjectCardWrapperProps = {
	children: React.ReactNode
	cardId: number
	progress: MotionValue<number>
	range: number[]
	targetScale: number
}

const ProjectCardWrapper = (props: ProjectCardWrapperProps) => {
	const { cardId, children, progress, range, targetScale } = props
	const currentCardId = useAppSelector((state) => state.projectCardHover.cardId)
	const { isDesktopSize } = useWindowWidth()
	const scale = useTransform(progress, range, [1, targetScale])

	const initial = { opacity: 0, y: 0, width: isDesktopSize ? '20vw' : '100%' }
	const animate = isDesktopSize
		? {
				width: cardId === currentCardId ? '100vw' : '20vw',
		  }
		: {
				width: '100%',
		  }

	return (
		<motion.div
			style={{ top: `calc(20vh + ${cardId * 25}px)`, scale }}
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
			className={styles['horizontal-flex']}>
			{children}
		</motion.div>
	)
}
export default ProjectCardWrapper
