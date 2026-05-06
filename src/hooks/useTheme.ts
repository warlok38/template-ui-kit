import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'ui-theme'

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark'

const getInitialTheme = (): Theme => {
  if (typeof document !== 'undefined') {
    const attrTheme = document.documentElement.dataset.theme
    if (isTheme(attrTheme)) {
      return attrTheme
    }
  }

  if (typeof window !== 'undefined') {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (isTheme(storedTheme)) {
      return storedTheme
    }
  }

  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setTheme(getInitialTheme())
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) {
      return
    }

    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme, isHydrated])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, setTheme, toggleTheme, isHydrated }
}
