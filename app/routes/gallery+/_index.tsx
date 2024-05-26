import Background from '#app/components/ui/background'
import Footer from '#app/components/ui/footer'
import HeroWithImage from '#app/components/ui/hero'
import Navigation from '#app/components/ui/navigation'
import Showcase from '#app/components/ui/showcase'
import { LoaderFunction, json } from '@remix-run/router'

const item = {
  headline: '日本で働きたい優秀なエンジニアのポートフォリオを確認できます',
  subheadline: '明確なテックスタックを確認することで適切な即戦力人材を確保',
  bottomText: {
    text: '詳細へ',
    href: 'https://www.risefor-business.com/file/RISEforBusinesss_service.pdf',
  },
}

type ShowcaseItem = {
  id: number
  name: string
  description: string
}

// export const loader: LoaderFunction = async () => {
const portfolio: ShowcaseItem[] = [
  { id: 1, name: 'Item One', description: 'This is the first item.' },
  { id: 2, name: 'Item Two', description: 'This is the second item.' },
  { id: 3, name: 'Item Three', description: 'This is the third item.' },
  { id: 4, name: 'Item One', description: 'This is the first item.' },
  { id: 5, name: 'Item Two', description: 'This is the second item.' },
  { id: 6, name: 'Item Three', description: 'This is the third item.' },
]

//   return json(portfolio)
// }

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
