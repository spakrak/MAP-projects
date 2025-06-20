
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "MAP Projects | Power Project Consulting & Execution",
  description:
    "MAP Projects specializes in power project development, execution, and staffing — delivering thermal and industrial energy solutions for data centers and complex infrastructure.",
  keywords: [
    "power project consulting",
    "thermal power development",
    "data center power solutions",
    "industrial energy infrastructure",
    "gas turbine integration",
    "FID support",
    "EPC project coordination",
    "behind-the-meter generation",
  ],
};

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