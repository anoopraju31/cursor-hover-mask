'use client'

import { useEffect, useState } from 'react'

const useWindowWidth = () => {
	const isClient = typeof window === 'object'
	const [width, setWidth] = useState(isClient ? window.innerWidth : 0)
	const [isDesktopSize, setIsDestopSize] = useState(
		isClient ? window.innerWidth >= 892 : false,
	)

	useEffect(() => {
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
