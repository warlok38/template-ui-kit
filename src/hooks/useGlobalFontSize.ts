import { useEffect, useState } from 'react'

const BASE_SCREEN_WIDTH = 1920
const BASE_FONT_SIZE = BASE_SCREEN_WIDTH / 100

export function useGlobalFontSize() {
  const [fontSize, setFontSize] = useState(BASE_FONT_SIZE)
  useEffect(() => {
    const updateFontSize = () => {
      const currentWidth = window.outerWidth !== 0 ? window.outerWidth : BASE_SCREEN_WIDTH
      const calculatedFontSize = (currentWidth * BASE_FONT_SIZE) / BASE_SCREEN_WIDTH

      setFontSize(calculatedFontSize)
    }

    updateFontSize()
    window.addEventListener('resize', updateFontSize)

    return () => {
      window.removeEventListener('resize', updateFontSize)
    }
  }, [])

  return fontSize
}
