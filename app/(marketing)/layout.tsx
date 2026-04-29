import { FloatingNav } from '@/components/sections/floating-nav'
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
      <FloatingNav />
      {/* <Footer /> */}
    </div>
  )
}
