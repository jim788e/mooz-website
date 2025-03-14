import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MOOZ - NFT Collection",
  description: "A unique NFT collection of 3333 digital cows living on the SEI blockchain",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

