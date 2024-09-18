// context/CatContext.tsx
'use client'

import React, { createContext, useState, ReactNode } from 'react'
import { Cat } from '../types/cat'
import { v4 as uuidv4 } from 'uuid'

interface CatContextType {
  cats: Cat[]
  addCat: (cat: Omit<Cat, 'id'>) => void // id provided by uuid
  editCat: (id: string, updatedCat: Omit<Cat, 'id'>) => void // id provided by uuid
  removeCat: (id: string) => void
}

export const CatContext = createContext<CatContextType | undefined>(undefined)

export const CatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cats, setCats] = useState<Cat[]>([])

  // const initialCats: Cat[] = [
  //   {
  //     id: '1',
  //     name: 'Fluffy',
  //     breed: 'Siamese',
  //     dateOfBirth: '01-01-2018',
  //     color: 'brown with white paws',
  //   },
  //   {
  //     id: '2',
  //     name: 'Mittens',
  //     breed: 'Tabby',
  //     dateOfBirth: '31-05-2014',
  //     color: 'grey',
  //   },

  //   {
  //     id: '3',
  //     name: 'Whiskers',
  //     breed: 'Persian',
  //     dateOfBirth: '15-02-2016',
  //     color: 'white',
  //   },
  //   {
  //     id: '4',
  //     name: 'Simba',
  //     dateOfBirth: '2017-09-30',
  //     color: 'Orange',
  //     breed: 'Maine Coon',
  //   },
  //   {
  //     id: '5',
  //     name: 'Cleo',
  //     dateOfBirth: '2021-04-18',
  //     color: 'Calico',
  //     breed: 'Sphynx',
  //   },
  //   {
  //     id: '6',
  //     name: 'Oliver',
  //     dateOfBirth: '2016-11-12',
  //     color: 'Brown Tabby',
  //     breed: 'American Shorthair',
  //   },
  //   {
  //     id: '7',
  //     name: 'Mittens',
  //     dateOfBirth: '2020-07-22',
  //     color: 'Black and White',
  //     breed: 'Tuxedo',
  //   },
  //   {
  //     id: '8',
  //     name: 'Jessie',
  //     dateOfBirth: '2019-01-05',
  //     color: 'White',
  //     breed: 'Persian',
  //   },
  // ]
  // useEffect(() => {
  //   setCats(initialCats)
  // }, [])

  const addCat = (cat: Omit<Cat, 'id'>) => {
    const newCat: Cat = { id: uuidv4(), ...cat } //adding the new id into the cat array
    setCats((prevCats) => [...prevCats, newCat]) //prevCats respresents the current state of cats, adds newCat to existing array of cats
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
