import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MobileContainer from "@/components/MobileContainer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col items-center bg-primary justify-center min-h-screen ${inter.className}`}>
        <MobileContainer bgColor={'primary'}>
          {children}
        </MobileContainer>
      </body>
    </html>
  )
}
