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
        <div className={styles.collapsedLabelWrap}>
          <span className={styles.collapsedLabel} aria-hidden={isOpen}>
            {collapsedLabel}
          </span>
        </div>

        <div id={panelId} className={`${styles.menuContent} ${isOpen ? styles.menuContentOpen : ''}`} aria-hidden={menuAriaHidden}>
          <div className={styles.menuHeader}>
            <span className={styles.menuTitle}>{collapsedLabel}</span>
            <button type="button" className={styles.closeButton} onClick={closeLeftBar} aria-label="Закрыть меню">
              ×
            </button>
          </div>
          <div className={styles.menuBody}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lorem ac mauris posuere convallis.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed fermentum tortor quis metus finibus posuere.</p>
            <p>Praesent sit amet nisl ut sapien posuere aliquet. Vivamus iaculis risus ut commodo gravida.</p>
            <p>Aliquam erat volutpat. Aenean tincidunt nisi id justo ullamcorper, id volutpat erat malesuada.</p>
            <p>Morbi imperdiet urna non turpis volutpat, a dictum dui pulvinar. Phasellus pulvinar sem et lacus commodo luctus.</p>
            <p>Curabitur eu nisi ac augue iaculis dignissim. Donec tristique pulvinar magna, non tempus risus volutpat at.</p>
            <p>Nullam molestie, augue et tristique facilisis, lacus risus volutpat magna, et cursus ligula metus vitae purus.</p>
            <p>Suspendisse potenti. Integer non tincidunt orci. Pellentesque id tincidunt nisl, vitae consectetur sem.</p>
          </div>
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
