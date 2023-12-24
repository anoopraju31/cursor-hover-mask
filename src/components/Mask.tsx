'use client'
import useMousePosition from '@/app/hooks/useMousePosition'
import {
	maskAnimation,
	maskInitialAnimation,
	maskTransition,
} from '@/app/utils/animations'
import { motion } from 'framer-motion'
import styles from './mask.module.css'
import useAppSelector from '@/app/hooks/useAppSelector'

const Mask = ({ children }: { children: React.ReactNode }) => {
	const { x, y, containerRef } = useMousePosition()
	const isHovered = useAppSelector((state) => state.textHover.isHovered)
	const size = isHovered ? 400 : 20
	return (
		<motion.div
			ref={containerRef}
			initial={maskInitialAnimation}
			animate={maskAnimation(x, y, size)}
			transition={maskTransition}
			className={styles.mask}>
			{children}
		</motion.div>
	)
}

export default Mask
