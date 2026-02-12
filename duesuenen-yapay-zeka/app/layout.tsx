import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Düşünen Yapay Zeka',
  description: 'Çocuklara düşünmeyi öğreten yapay zeka arkadaş',
}

export const viewport: Viewport = {
  themeColor: '#d4896a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body
        className={`${nunito.variable} ${nunitoSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
