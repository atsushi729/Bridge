import Background from '#app/components/ui/background'
import Footer from '#app/components/ui/footer'
import HeroWithImage from '#app/components/ui/hero'
import Navigation from '#app/components/ui/navigation'
import Showcase from '#app/components/ui/showcase'
import { portfolio } from '#app/constants/portfolio'

// Types
type ShowcaseItem = {
  id: number
  name: string
  description: string
  portfolioImgUrl: string
  authorName: string
  authorImage: string
  date: string
}

// Value (Response)
const item = {
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
      <HeroWithImage item={item} />
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
