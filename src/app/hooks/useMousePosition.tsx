import { useState, useEffect, useRef } from 'react'

type MousePosition = {
	x: number
	y: number
}

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: -1000,
		y: -1000,
	})
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleMousePosition = (e: MouseEvent) => {
			setMousePosition({
				x: e.pageX,
				y: e.pageY,
			})
		}
		const handleScroll = () => {
			setMousePosition({
				x: -1000,
				y: -1000,
			})
		}
		document.addEventListener('mousemove', handleMousePosition)
		document.addEventListener('scroll', handleScroll)

		return () => {
			document.removeEventListener('mousemove', handleMousePosition)
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return { ...mousePosition, containerRef }
}

export default useMousePosition
