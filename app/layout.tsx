import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Play Ground',
  description: 'My Play Ground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <footer style={{backgroundColor: "ghostwhite"}}>
        <p>Play Ground Footer</p>
      </footer> */}
    </html>
  )
}
