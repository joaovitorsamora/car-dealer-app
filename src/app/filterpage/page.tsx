'use client'
import { useEffect, useState } from 'react'
import { DropdownCar } from '../components/dropdowcar'
import { DropdownDate } from '../components/dropdowndate'
import Link from 'next/link'

export function FilterPage() {
  const [cars, setCars] = useState([])
  const [selectedCarId, setSelectedCarId] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  useEffect(() => {
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      .then((res) => res.json())
      .then((data) => setCars(data.Results))
      .catch((err) => console.log(err))
  }, [])

  const currentYear = new Date().getFullYear()
  const year = Array.from(new Array(currentYear - 2014), (_, index) => 2015 + index)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Filter Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <DropdownCar cars={cars} onSelectCar={(id) => setSelectedCarId(id)} />
        <DropdownDate
          ModelYear={year.map((year) => ({ ModelYear: year.toString() }))}
          onSelectYear={(year) => setSelectedYear(year)}
        />
        <Link href={`/resultpage/${selectedCarId}/${selectedYear}`} passHref>
          <button
            disabled={!selectedCarId || !selectedYear}
            className={`mt-4 w-full py-2 px-4 rounded text-white font-bold ${
              !selectedCarId || !selectedYear ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-700'
            }`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  )
}
