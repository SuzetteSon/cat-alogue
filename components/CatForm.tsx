'use client'

import React, { useState, useEffect } from 'react'
import { Cat } from '../types/cat'

interface CatFormProps {
  initialData?: Omit<Cat, 'id'>
  onSubmit: (data: Omit<Cat, 'id'>) => void
}

const CatForm: React.FC<CatFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '')
  const [dateOfBirth, setDateOfBirth] = useState(initialData?.dateOfBirth || '')
  const [breed, setBreed] = useState(initialData?.breed || '')
  const [color, setColor] = useState(initialData?.color || '')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setDateOfBirth(initialData.dateOfBirth)
      setBreed(initialData.breed || '')
      setColor(initialData.color || '')
    }
  }, [initialData])

  const validate = () => {
    const newErrors: { [key: string]: string } = {} // annotation type for newErrors key which is a string and value which is a string
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = validate()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    onSubmit({
      name: name.trim(),
      dateOfBirth,
      breed: breed.trim() || undefined,
      color: color.trim() || undefined,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 m-5">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full p-2 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded`}
          placeholder="e.g., Whiskers"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Date of Birth Field */}
      <div>
        <label
          htmlFor="dateOfBirth"
          className="block text-gray-700 font-medium mb-1"
        >
          Date of Birth<span className="text-red-500">*</span>
        </label>
        <input
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className={`w-full p-2 border ${
            errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
          } rounded`}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
        )}
      </div>

      {/* Breed Field */}
      <div>
        <label htmlFor="breed" className="block text-gray-700 font-medium mb-1">
          Breed
        </label>
        <input
          id="breed"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g., Siamese"
        />
      </div>

      {/* Color Field */}
      <div>
        <label htmlFor="color" className="block text-gray-700 font-medium mb-1">
          Color
        </label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g., Brown"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default CatForm
