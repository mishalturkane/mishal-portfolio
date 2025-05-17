import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import type React from "react" // Import React
import { SpeedInsights } from "@vercel/speed-insights/next"
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Mishal Turkane | Home",
  description: "Mishal Turkane - Blockchain Engineer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="max-w-[800px] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <body className="bg-[#171717] text-white font-space-mono">{children}</body>
      <SpeedInsights />
    </html>
  )
}

