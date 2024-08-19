import React from 'react'

interface DataCarType {
  ModelYear: { ModelYear: string }[]
  onSelectYear: (year: string) => void
}

export const DropdownDate: React.FC<DataCarType> = ({ ModelYear, onSelectYear }) => {
  const handleChooseCar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectYear(event.target.value)
  }

  return (
    <div>
      <label>Choose a date: </label>
      <select onChange={handleChooseCar}>
        {ModelYear.map((dateItem: { ModelYear: string }, index: number) => (
          <option key={index} value={dateItem.ModelYear}>
            {dateItem.ModelYear}
          </option>
        ))}
      </select>
    </div>
  )
}
