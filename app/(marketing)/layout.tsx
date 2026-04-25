// TODO: import { Navbar } from '@/components/sections/navbar'
// TODO: import { Footer } from '@/components/sections/footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
