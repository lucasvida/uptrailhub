import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "UpTrailHub - Transforme sua Carreira",
  description: "Hub de aprendizado para requalificação profissional com mentoria especializada",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
