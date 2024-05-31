import { useNavigate } from '@remix-run/react'

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

type ShowcaseProps = {
  portfolio: ShowcaseItem[]
}

const Showcase = ({ portfolio }: ShowcaseProps) => {
  const navigate = useNavigate()

  const handleCardClick = (id: number) => {
    navigate(`/portfolio/${id}`)
  }

  return (
    <div className="z-10 mx-auto max-w-6xl p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">ポートフォリオ</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="min-w-[250px] transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              <div className="mt-4 flex items-center">
                <img
                  src={item.authorImage}
                  alt={item.authorName}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.authorName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Showcase
