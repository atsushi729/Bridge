import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'
import { useParams } from '@remix-run/react'

interface ShowcaseItem {
  id: number
  name: string
  description: string
  imageUrl: string
  bodyText: string
  authorName: string
  authorDescription: string
}

const portfolio: ShowcaseItem[] = [
  {
    id: 1,
    name: 'Trigger.dev v3: Durable Serverless functions. No timeouts.',
    description: 'This is the description of Project One.',
    imageUrl: '/images/motivation.jpeg',
    bodyText:
      'Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look.',
    authorName: 'John Doe',
    authorDescription: 'Project Manager',
  },
]

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>()

  const item = portfolio.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <>
      {/* Navigation */}
      <Navigation />
      <div className="flex min-h-screen flex-col items-center bg-white text-black dark:bg-black dark:text-white">
        <div className="w-full max-w-4xl p-4">
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold">{item.name}</h1>
            <p className="mb-4 text-gray-600">{item.description}</p>
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={item.imageUrl}
                alt={item.authorName}
              />
              <div className="ml-4">
                <p className="font-bold">{item.authorName}</p>
                <p className="text-gray-600">{item.authorDescription}</p>
              </div>
            </div>
          </div>
          <img className="mb-8 h-auto w-full" src={item.imageUrl} alt={item.name} />
          <p className="mb-8 text-justify">{item.bodyText}</p>
          <div className="grid grid-cols-2 gap-4">
            <img className="h-auto w-full" src={item.imageUrl} alt="extra image 1" />
            <img className="h-auto w-full" src={item.imageUrl} alt="extra image 2" />
          </div>
          <p className="mt-8 text-justify">{item.bodyText}</p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default PortfolioDetail
