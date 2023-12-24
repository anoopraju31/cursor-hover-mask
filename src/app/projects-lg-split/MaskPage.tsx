'use client'

import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Mask from '@/components/Mask'
import SlideMask from './SlideMask'
import SlideLgMask from './SlideLgMask'

const MaskPage = () => {
	const container = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	useEffect(() => {
		const lenis = new Lenis()

		// @ts-ignore
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	const slides = [
		{ id: 0, color: '#034', img: '/dropbox.png' },
		{ id: 1, color: '#fc3', img: '/eat-curious.png' },
		{ id: 2, color: '#fff', img: '/summerize.png' },
		{ id: 3, color: '#c34', img: '/netflix-gpt.png' },
		{ id: 4, color: '#0f3', img: '/nike.png' },
	]
	return (
		<div ref={container} className='absolute top-0 left-0 right-0 w-full'>
			<Mask>
				<div className='mdlg:px-4'>
					<div className='h-screen'></div>

					<div className='relative mdlg:hidden'>
						{slides.map(({ id }) => {
							const targetScale = 1 - (slides.length - id) * 0.05
							return (
								<SlideMask
									key={id}
									id={id}
									progress={scrollYProgress}
									range={[id * 0.16, 1]}
									targetScale={targetScale}
								/>
							)
						})}
					</div>

					<div className='relative hidden mdlg:flex mdlg:gap-4'>
						{slides.map(({ id }) => (
							<SlideLgMask key={id} id={id} />
						))}
					</div>

					<div className='h-screen'></div>
				</div>
			</Mask>
		</div>
	)
}

export default MaskPage
