import Background from '#app/components/ui/background'
import Footer from '#app/components/ui/footer'
import HeroWithImage from '#app/components/ui/hero'
import Navigation from '#app/components/ui/navigation'
import Showcase from '#app/components/ui/showcase'
import { portfolio } from '#app/constants/portfolio'

// Hero contents
const heroContents = {
  headline: '日本で働きたい優秀なエンジニアのポートフォリオを確認できます',
  subheadline: '明確なテックスタックを確認することで適切な即戦力人材を確保',
  image: '/images/hero.jpeg',
  bottomText: {
    text: '詳細へ',
    href: 'https://www.risefor-business.com/file/RISEforBusinesss_service.pdf',
  },
}

const Index = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-card">
      {/* Navigation */}
      <Navigation />
      {/* Hero */}
      <HeroWithImage heroContents={heroContents} />
      {/* Showcase */}
      <Showcase portfolio={portfolio} />
      {/* Footer */}
      <Footer />
      {/* Background */}
      <Background />
    </div>
  )
}

export default Index
