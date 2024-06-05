import Background from '#app/components/ui/background'
import Footer from '#app/components/ui/footer'
import HeroWithImage from '#app/components/ui/hero'
import Navigation from '#app/components/ui/navigation'
import Showcase from '#app/components/ui/showcase'

// Types
type ShowcaseItem = {
  id: number
  name: string
  description: string
  imageUrl: string
  authorName: string
  authorImage: string
  date: string
}

// Value (Response)
const item = {
  headline: '日本で働きたい優秀なエンジニアのポートフォリオを確認できます',
  subheadline: '明確なテックスタックを確認することで適切な即戦力人材を確保',
  bottomText: {
    text: '詳細へ',
    href: 'https://www.risefor-business.com/file/RISEforBusinesss_service.pdf',
  },
}

// export const loader: LoaderFunction = async () => {
const portfolio: ShowcaseItem[] = [
  {
    id: 1,
    name: 'アルゴリズムドキュメント（React + P5.js + Manim）',
    description:
      'データ構造や探索・ソートアルゴリズムの概要や計算量をまとめたサイトをReactベースで作成しました。',
    imageUrl: '/images/algorithm.png',
    authorName: 'Atsushi Hatakeyama',
    authorImage: '/images/motivation.jpeg',
    date: 'November 28, 2023',
  },
  {
    id: 2,
    name: 'Top 4 ways to send notifications about new GitHub stars',
    description:
      'Learn how to get notified about new GitHub stars every day using email, SMS, Slack and Discord.',
    imageUrl: '/images/motivation.jpeg',
    authorName: 'Eric Allam',
    authorImage: '/images/motivation.jpeg',
    date: 'November 21, 2023',
  },
  {
    id: 3,
    name: 'Take NextJS to the next level: Create a GitHub stars monitor',
    description:
      'Learn how to create a GitHub stars monitor to check your stars over months and how many stars you get daily.',
    imageUrl: '/images/motivation.jpeg',
    authorName: 'Eric Allam',
    authorImage: '/images/motivation.jpeg',
    date: 'November 14, 2023',
  },
  {
    id: 4,
    name: 'Item Four',
    description: 'This is the fourth item.',
    imageUrl: '/images/motivation.jpeg',
    authorName: 'Author Four',
    authorImage: '/images/motivation.jpeg',
    date: 'November 7, 2023',
  },
  {
    id: 5,
    name: 'Item Five',
    description: 'This is the fifth item.',
    imageUrl: '/images/motivation.jpeg',
    authorName: 'Author Five',
    authorImage: '/images/motivation.jpeg',
    date: 'October 31, 2023',
  },
  {
    id: 6,
    name: 'Item Six',
    description: 'This is the sixth item.',
    imageUrl: '/images/motivation.jpeg',
    authorName: 'Author Six',
    authorImage: '/images/motivation.jpeg',
    date: 'October 24, 2023',
  },
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
