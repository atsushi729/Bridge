import Background from '#app/components/ui/background'
import Footer from '#app/components/ui/footer'
import HeroWithImage from '#app/components/ui/hero'
import Navigation from '#app/components/ui/navigation'

const item = {
  headline: 'hello',
  subheadline: 'hello',
  bottomText: {
    text: 'hello',
    href: 'https://www.risefor-business.com/file/RISEforBusinesss_service.pdf',
  },
}

const Index = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-card">
      {/* Navigation */}
      <Navigation />
      {/* Hero */}
      <HeroWithImage item={item} />
      {/* Footer */}
      <Footer />
      {/* Background */}
      <Background />
    </div>
  )
}

export default Index
