import type React from "react"
import type { Metadata } from "next"
import { VT323, Orbitron } from "next/font/google"
import "./globals.css"

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

const orbitron = Orbitron({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "SimpleSwap DEX - GameFi Powered Trading",
  description: "A neo-cyberpunk GameFi DEX built on Sui blockchain with arcade-style trading experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${orbitron.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
