'use client'

import styles from './LeftBar.module.css'
import { useLeftBar } from './hooks/useLeftBar'

type LeftBarProps = {
  collapsedLabel?: string
}

export function LeftBar({ collapsedLabel = 'Меню' }: LeftBarProps) {
  const {
    isOpen,
    panelId,
    closeLeftBar,
    handleCollapsedMenuKeyDown,
    asideInteractionProps,
    menuAriaHidden,
    backdropAriaHidden,
    backdropTabIndex,
  } = useLeftBar({ collapsedLabel })

  return (
    <>
      <aside
        className={`${styles.leftBar} ${isOpen ? styles.leftBarOpen : ''}`}
        onKeyDown={handleCollapsedMenuKeyDown}
        {...asideInteractionProps}
      >
        <span className={styles.collapsedLabel} aria-hidden={isOpen}>
          {collapsedLabel}
        </span>

        <div id={panelId} className={`${styles.menuContent} ${isOpen ? styles.menuContentOpen : ''}`} aria-hidden={menuAriaHidden}>
          <div className={styles.menuHeader}>
            <span className={styles.menuTitle}>{collapsedLabel}</span>
            <button type="button" className={styles.closeButton} onClick={closeLeftBar} aria-label="Закрыть меню">
              ×
            </button>
          </div>
          <div className={styles.menuBody}>Тут будет контент меню</div>
        </div>
      </aside>

      <button
        type="button"
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`}
        aria-label="Закрыть меню"
        aria-hidden={backdropAriaHidden}
        tabIndex={backdropTabIndex}
        onClick={closeLeftBar}
      />
    </>
  )
}
