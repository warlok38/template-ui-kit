'use client'

import { useState } from 'react'
import styles from './LeftBar.module.css'

export function LeftBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleLeftBar = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <aside className={`${styles.leftBar} ${isOpen ? styles.leftBarOpen : ''}`}>
      <button type="button" className={styles.toggleButton} onClick={toggleLeftBar}>
        {isOpen ? 'Close menu' : 'Open menu'}
      </button>

      {isOpen && <div className={styles.menuContent}>LeftBar</div>}
    </aside>
  )
}
