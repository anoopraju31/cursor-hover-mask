'use client'
import { useEffect, useState } from 'react'

const useWindowWidth = () => {
	const [width, setWidth] = useState(0)
	const [isDesktopSize, setIsDestopSize] = useState(false)

	useEffect(() => {
		setWidth(window.innerWidth)
		setIsDestopSize(window.innerWidth >= 892)

		const handleResize = () => {
			setWidth(window.innerWidth)
			setIsDestopSize(window.innerWidth >= 892)
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return { width, isDesktopSize }
}

export default useWindowWidth
