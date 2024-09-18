'use client'

import React, { useContext, useState } from 'react'
import { CatContext } from '../context/CatContext'
import Link from 'next/link'
import Search from '@/ui/Search'
import { useRouter } from 'next/navigation'

const CatList: React.FC = () => {
  const catContext = useContext(CatContext)
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  if (!catContext) {
    return <div>Loading...</div>
  }

  const { cats, removeCat } = catContext

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen">
      {filteredCats.length > 0 && (
        <div>
          <Search
            value={searchTerm}
            placeholder={'Search by name...'}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {filteredCats.length === 0 ? (
        <p>No cats found.</p>
      ) : (
        <ul
          className={`columns-1 ${filteredCats.length > 3 ? 'md:columns-4' : ''}
            ${filteredCats.length > 2 ? 'md:columns-3 ' : ''} 
            ${filteredCats.length > 1 ? 'md:columns-2' : ''} mt-2`}
        >
          {filteredCats.map((cat) => (
            <li key={cat.id} className="border p-4 rounded mb-2">
              <div className="pb-4">
                <Link href={`/cats/${cat.id}`} className="text-xl">
                  {cat.name}
                  <div className="rounded-full bg-blue-200 h-20 w-20 mx-auto my-5"></div>
                </Link>
              </div>
              <div className="space-2">
                <button
                  onClick={() => router.push(`/cats/edit/${cat.id}`)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeCat(cat.id)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="border p-4 rounded-lg flex justify-between mt-2">
        {' '}
        <Link href="/cats/add">Add Cat</Link>
      </div>
    </div>
  )
}

export default CatList
