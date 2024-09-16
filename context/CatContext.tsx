// context/CatContext.tsx
'use client'

import React, { createContext, useState, ReactNode } from 'react'
import { Cat } from '../types/cat'
import { v4 as uuidv4 } from 'uuid'

interface CatContextType {
  cats: Cat[]
  addCat: (cat: Omit<Cat, 'id'>) => void
  editCat: (id: string, updatedCat: Omit<Cat, 'id'>) => void
  removeCat: (id: string) => void
}

export const CatContext = createContext<CatContextType | undefined>(undefined)

export const CatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cats, setCats] = useState<Cat[]>([])

  const addCat = (cat: Omit<Cat, 'id'>) => {
    const newCat: Cat = { id: uuidv4(), ...cat }
    setCats((prevCats) => [...prevCats, newCat])
  }

  const editCat = (id: string, updatedCat: Omit<Cat, 'id'>) => {
    setCats((prevCats) =>
      prevCats.map((cat) => (cat.id === id ? { id, ...updatedCat } : cat)),
    )
  }

  const removeCat = (id: string) => {
    setCats((prevCats) => prevCats.filter((cat) => cat.id !== id))
  }

  return (
    <CatContext.Provider value={{ cats, addCat, editCat, removeCat }}>
      {children}
    </CatContext.Provider>
  )
}
