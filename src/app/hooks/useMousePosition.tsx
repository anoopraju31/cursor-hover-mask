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
		document.addEventListener('mousemove', handleMousePosition)

		return () => {
			document.removeEventListener('mousemove', handleMousePosition)
		}
	}, [])

	return { ...mousePosition, containerRef }
}

export default useMousePosition
