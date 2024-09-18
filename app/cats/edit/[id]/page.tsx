'use client'

import React, { useContext } from 'react'
import CatForm from '../../../../components/CatForm'
import { CatContext } from '../../../../context/CatContext'
import { useRouter, useParams } from 'next/navigation'
import { Cat } from '../../../../types/cat'

const EditCatPage: React.FC = () => {
  const { id } = useParams()
  const router = useRouter()
  const catContext = useContext(CatContext)

  if (!catContext) {
    return <div>Loading...</div>
  }

  const { cats, editCat } = catContext
  const cat = cats.find((c) => c.id === id)

  if (!cat) {
    return <div>Cat not found.</div>
  }

  const handleEditCat = (data: Omit<Cat, 'id'>) => {
    editCat(id as string, data)
    router.push(`/cats/${id}`) // Navigate to the cat detail page after editing
  }

  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold mb-4">Edit Cat</h1>
      <CatForm initialData={cat} onSubmit={handleEditCat} />
    </div>
  )
}

export default EditCatPage
