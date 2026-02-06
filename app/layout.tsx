import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { AppProviders } from './providers'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieTrack - Your Personal Watchlist',
  description: 'Discover, search, and manage your movie watchlist with MovieTrack',

}

export const viewport = {
  themeColor: '#1a1a1a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
