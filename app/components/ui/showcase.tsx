// app/components/Showcase.tsx

import React from 'react'

type ShowcaseItem = {
  id: number
  name: string
  description: string
}

type ShowcaseProps = {
  portfolio: ShowcaseItem[]
}

const Showcase: React.FC<ShowcaseProps> = ({ portfolio }) => {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">ポートフォリオ</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105">
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Showcase
