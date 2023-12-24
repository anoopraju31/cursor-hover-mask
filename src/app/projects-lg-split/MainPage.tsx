'use client'

import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Slide from './Slide'
import Lenis from '@studio-freight/lenis'
import SlideLg from './SlideLg'

const MainPage = () => {
	const container = useRef<HTMLElement | null>(null)
	const { scrollYProgress } = useScroll({
		layoutEffect: false,
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
		<main ref={container} className='bg-orange-500'>
			<div className='mdlg:px-4'>
				<div className='h-screen'></div>

				<div className='relative mdlg:hidden'>
					{slides.map(({ id, color, img }) => {
						const targetScale = 1 - (slides.length - id) * 0.05
						return (
							<Slide
								key={id}
								id={id}
								color={color}
								img={img}
								progress={scrollYProgress}
								range={[id * 0.16, 1]}
								targetScale={targetScale}
							/>
						)
					})}
				</div>

				<div className='hidden mdlg:h-full mdlg:flex mdlg:gap-4'>
					{slides.map(({ id, img }) => {
						return <SlideLg key={id} id={id} img={img} />
					})}
				</div>

				<div className='h-screen'></div>
			</div>
		</main>
	)
}

export default MainPage
