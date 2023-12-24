'use client'

import React, { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Slide from './Slide'
import Lenis from '@studio-freight/lenis'

const MainPage = () => {
	const container = useRef(null)
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
		<main className='bg-orange-500'>
			<div className='max-w-[1400px] mx-auto'>
				<div className='h-screen'></div>

				<div className='relative mdlg:h-full mdlg:flex mdlg:gap-4'>
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

				<div className='h-screen'></div>
			</div>
		</main>
	)
}

export default MainPage
