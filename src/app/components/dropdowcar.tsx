import React from 'react'

interface CarType {
  cars: {
    MakeId: number
    MakeName: string
  }[]
  onSelectCar: (car: string) => void
}

export const DropdownCar: React.FC<CarType> = ({ cars, onSelectCar }) => {
  const handleChooseCar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectCar(event.target.value)
  }

  return (
    <div>
      <label>Choose a car</label>
      <select onChange={handleChooseCar}>
        {cars.map((car) => (
          <option key={car.MakeId} value={car.MakeId}>
            {car.MakeName}
          </option>
        ))}
      </select>
    </div>
  )
}
