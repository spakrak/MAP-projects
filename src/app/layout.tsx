
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MAP Projects | Project Development & Execution for Thermal Power',
  description: 'MAP Projects delivers expert project development and execution for thermal power assets, including gas turbines, CHP, and BTM generation.',
  //keywords: 'website design, small business websites, mobile-friendly, professional web design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}