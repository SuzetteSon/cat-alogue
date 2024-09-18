// app/cats/add/page.tsx
'use client'

import React, { useContext } from 'react'
import CatForm from '../../../components/CatForm'
import { CatContext } from '../../../context/CatContext'
import { useRouter } from 'next/navigation'
import { Cat } from '../../../types/cat'

const AddCatPage: React.FC = () => {
  const catContext = useContext(CatContext)
  const router = useRouter()

  if (!catContext) {
    return <div>Loading...</div>
  }

  const { addCat } = catContext

  const handleAddCat = (data: Omit<Cat, 'id'>) => {
    addCat(data)
    router.push('/cats')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add a New Cat</h1>
      <CatForm onSubmit={handleAddCat} />
    </div>
  )
}

export default AddCatPage
