import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import type React from "react" // Import React

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Mishal Portfolio",
  description: "Mishal Turkane - Blockchain Engineer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="bg-[#171717] text-white font-space-mono">{children}</body>
    </html>
  )
}

