'use client'

import { useEffect, useId, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'

type UseLeftBarParams = {
  collapsedLabel: string
}

export function useLeftBar({ collapsedLabel }: UseLeftBarParams) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  const openLeftBar = () => {
    setIsOpen(true)
  }

  const closeLeftBar = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLeftBar()
      }
    }

    document.addEventListener('keydown', handleEscClose)

    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [isOpen])

  const handleCollapsedMenuKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (isOpen) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openLeftBar()
    }
  }

  const asideInteractionProps = !isOpen
    ? {
        onClick: openLeftBar,
        role: 'button' as const,
        tabIndex: 0,
        'aria-expanded': false,
        'aria-controls': panelId,
        'aria-label': `Открыть меню: ${collapsedLabel}`,
      }
    : {
        onClick: undefined,
        role: undefined,
        tabIndex: -1,
        'aria-expanded': undefined,
        'aria-controls': undefined,
        'aria-label': undefined,
      }

  return {
    isOpen,
    panelId,
    closeLeftBar,
    handleCollapsedMenuKeyDown,
    asideInteractionProps,
    menuAriaHidden: !isOpen,
    backdropAriaHidden: !isOpen,
    backdropTabIndex: isOpen ? 0 : -1,
  }
}
