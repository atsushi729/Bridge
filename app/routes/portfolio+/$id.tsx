import Author from '#app/components/ui/author'
import Background from '#app/components/ui/background'
import { Button } from '#app/components/ui/button'
import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'
import { portfolio } from '#app/constants/portfolio'
import { useNavigate, useParams } from '@remix-run/react'

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const item = portfolio.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found</div>
  }

  const handleAuthorClick = (id: number) => {
    navigate(`/author/${id}`)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Navigation */}
      <Navigation />
      <div className="z-10 flex min-h-screen flex-col items-center text-black dark:text-white">
        <div className="w-full max-w-4xl p-4">
          <div className="mb-8">
            {/* Title */}
            <h1 className="mb-2 text-4xl font-bold">{item.name}</h1>
            <p className="mb-4">{item.description}</p>
            {/* Author */}
            <div className="cursor-pointer" onClick={() => handleAuthorClick(item.id)}>
              <Author
                imageUrl={item.authorImgUrl}
                authorName={item.authorName}
                position={item.position}
              />
            </div>
            {/* Main contents */}
            <img
              className="mb-8 h-auto w-full"
              src={item.portfolioImgUrl}
              alt={item.name}
            />
            <h2 className="mb-2 font-bold">アプリケーションについて</h2>
            <p className="mb-8 text-justify">{item.applicationDescription}</p>
            <h2 className="mb-2 font-bold">テックスタック</h2>
            <p className="mb-8 text-justify">{item.techstackDescription}</p>
            <h2 className="mb-2 font-bold">技術コメント</h2>
            <p className="mb-8 text-justify">{item.techDescription}</p>
            <h2 className="mb-2 font-bold">リンク</h2>
            <p className="mb-8 text-justify">
              <a
                href={item.link}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer">
                {item.link}
              </a>
            </p>
          </div>
        </div>
      </div>
      <Button
        size="sm"
        className="z-10 mx-auto mb-5 w-24"
        onClick={() => handleAuthorClick(item.id)}>
        作者ページへ
      </Button>
      {/* Footer */}
      <Footer />
      {/* Background */}
      <Background />
    </div>
  )
}

export default PortfolioDetail
