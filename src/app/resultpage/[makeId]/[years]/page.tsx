'use client'
import React, { useEffect, useState } from 'react'

interface ModelsType {
  Model_ID: number
  Model_Name: string
  ModelYear: number
}

export default function ModelsListContent({ params }: { params: { makeId: string; years: string } }) {
  const [models, setModels] = useState<ModelsType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const { makeId, years } = params
    console.log(`ID - ${makeId} | Year - ${years}`)
    if (makeId && years) {
      fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${years}?format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.Results) {
            setModels(data.Results)
          } else {
            setError('No models found for the selected car and year.')
          }
        })
        .catch((err) => {
          setError('Error retrieving data. Please try again later.')
          console.log(err)
        })
        .finally(() => setLoading(false))
    } else {
      setError('Make ID or Year is missing.')
      setLoading(false)
    }
  }, [params])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Result Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <ul className="space-y-4">
          {models.map((model) => (
            <li
              key={`${model.Model_ID}-${model.ModelYear}`}
              className="p-4 bg-gray-50 rounded border border-gray-300 shadow-sm text-gray-700"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
