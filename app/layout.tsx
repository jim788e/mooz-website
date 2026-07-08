import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MOOZ - NFT Collection | Live on Ethereum | Cool Cows Lab",
  description: "MOOZ is a flagship NFT collection of 1,700 digital cows on Ethereum. Staking, Vaults, and custom analytics are launching soon on Sei via Cool Cows Lab.",
  keywords: ["MOOZ", "NFT", "Ethereum", "SEI blockchain", "staking", "vaults", "MOOZ token", "WSEI", "Cool Cows Lab", "digital collectibles"],
  authors: [{ name: "MOOZ Team" }],
  creator: "MOOZ Collection",
  publisher: "MOOZ Collection",
  metadataBase: new URL('https://www.mooz.farm'),
  openGraph: {
    title: "MOOZ - NFT Collection | Live on Ethereum | Cool Cows Lab",
    description: "MOOZ is a flagship NFT collection of 1,700 digital cows on Ethereum. Staking, Vaults, and custom analytics are launching soon on Sei via Cool Cows Lab.",
    url: 'https://www.mooz.farm',
    siteName: 'MOOZ',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MOOZ NFT Collection - Live on Ethereum | Cool Cows Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MOOZ - NFT Collection | Live on Ethereum | Cool Cows Lab",
    description: "MOOZ is a flagship NFT collection of 1,700 digital cows on Ethereum. Staking, Vaults, and custom analytics are launching soon on Sei via Cool Cows Lab.",
    images: ['/images/og-image.png'],
    creator: '@MoozNft',
    site: '@MoozNft',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

