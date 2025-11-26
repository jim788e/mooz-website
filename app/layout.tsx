import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MOOZ - NFT Collection | Staking Live | Migrating to Ethereum",
  description: "A unique NFT collection of 3,333 digital cows. Staking and Vaults are LIVE! Stake MOOZ NFTs or $MOOZ tokens to earn rewards. Migrating to Ethereum for enhanced opportunities.",
  keywords: ["MOOZ", "NFT", "SEI blockchain", "Ethereum", "staking", "vaults", "MOOZ token", "WSEI", "Cool Cows Lab", "digital collectibles"],
  authors: [{ name: "MOOZ Team" }],
  creator: "MOOZ Collection",
  publisher: "MOOZ Collection",
  metadataBase: new URL('https://www.mooz.farm'),
  openGraph: {
    title: "MOOZ - NFT Collection | Staking Live | Migrating to Ethereum",
    description: "A unique NFT collection of 3,333 digital cows. Staking and Vaults are LIVE! Stake MOOZ NFTs or $MOOZ tokens to earn rewards. Migrating to Ethereum for enhanced opportunities.",
    url: 'https://www.mooz.farm',
    siteName: 'MOOZ',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MOOZ NFT Collection - Staking Live | Migrating to Ethereum',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MOOZ - NFT Collection | Staking Live | Migrating to Ethereum",
    description: "A unique NFT collection of 3,333 digital cows. Staking and Vaults are LIVE! Stake MOOZ NFTs or $MOOZ tokens to earn rewards.",
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

