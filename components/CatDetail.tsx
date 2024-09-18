
'use client'

import React, { useContext } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { CatContext } from '../context/CatContext'

const CatDetail: React.FC = () => {
  const { id } = useParams()
  const router = useRouter()
  const catContext = useContext(CatContext)

  if (!catContext) {
    return <div>Loading...</div>
  }

  const { cats } = catContext
  const cat = cats.find((c) => c.id === id)

  if (!cat) {
    return <div>Cat not found.</div>
  }

  return (
    <div className="border p-6 rounded">
      <h1 className="text-3xl font-bold mb-4">{cat.name}</h1>
      <p className="mb-2">
        <strong>Date of Birth:</strong>{' '}
        {new Date(cat.dateOfBirth).toLocaleDateString()}
      </p>
      {cat.breed && (
        <p className="mb-2">
          <strong>Breed:</strong> {cat.breed}
        </p>
      )}
      {cat.color && (
        <p className="mb-4">
          <strong>Color:</strong> {cat.color}
        </p>
      )}
      <button
        onClick={() => router.push(`/cats/edit/${cat.id}`)}
        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={() => router.push('/cats')}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Back to List
      </button>
    </div>
  )
}

export default CatDetail
