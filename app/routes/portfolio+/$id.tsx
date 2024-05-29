// routes/portfolio+/$id.tsx

import React from 'react'
import { useParams } from '@remix-run/react'

interface ShowcaseItem {
  id: number
  name: string
  description: string
}

const portfolio: ShowcaseItem[] = [
  { id: 1, name: 'Project One', description: 'Description of Project One' },
  { id: 2, name: 'Project Two', description: 'Description of Project Two' },
  { id: 3, name: 'Project Three', description: 'Description of Project Three' },
]

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>()

  const item = portfolio.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="mb-8 text-4xl font-bold">{item.name}</h1>
      <p className="text-gray-600">{item.description}</p>
    </div>
  )
}

export default PortfolioDetail
