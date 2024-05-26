import Background from '#app/components/ui/background'
import { Button, buttonVariants } from '#app/components/ui/button'
import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'
import { siteConfig } from '#app/utils/constants/brand'
import { cn } from '#app/utils/misc'
import { Link } from '@remix-run/react'

const Index = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-card">
      {/* Navigation */}
      <Navigation />
      {/* Footer */}
      <Footer />
      {/* Background */}
      <Background />
    </div>
  )
}

export default Index
