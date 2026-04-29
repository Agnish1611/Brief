import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { CustomCursor } from '@/components/shared/custom-cursor'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground antialiased")}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
