'use client'

import { useTheme } from '@/hooks'
import styles from './Header1.module.css'

export function Header1() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className={styles.headerPrimary}>
      <span className={styles.title}>Header1</span>
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggleTheme}
      >
        <span className={styles.themeLabel}>{isDark ? 'Dark' : 'Light'}</span>
        <span className={styles.themeSwitch}>
          <span className={`${styles.themeThumb} ${isDark ? styles.themeThumbDark : ''}`}>
            {isDark ? 'M' : 'S'}
          </span>
        </span>
      </button>
    </header>
  )
}
