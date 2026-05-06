'use client'

import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Layout } from '@/components'
import { useGlobalFontSize } from '@/hooks'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontSize = useGlobalFontSize()

  return (
    <html lang="en" style={{ fontSize }} data-theme="light" suppressHydrationWarning>
      <body className={inter.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  try {
    const storedTheme = window.localStorage.getItem('ui-theme');
    const theme = storedTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = 'light';
  }
})();`}
        </Script>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
