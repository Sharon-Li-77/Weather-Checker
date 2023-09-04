import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../api/weather'
import { useState } from 'react'

function App() {
  const { data, isLoading } = useQuery(['weather'], getWeather)
  const [selected, setSelected] = useState(data?.time[0] ?? '')

  const handlechange = (e) => {
    setSelected(e.target.value)
    console.log(e.target.value)
  }

  console.log('data', data)

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <select
        name="weather"
        id="weather"
        value={selected}
        onChange={handlechange}
      >
        {data &&
          !isLoading &&
          data.time.map((p, idx) => (
            <option key={idx} value={idx}>
              {p}
            </option>
          ))}
      </select>
      <br />
      <br />
      {data && data.temperature_2m && data.temperature_2m[selected] && (
        <div>
          {data.temperature_2m[selected]}
          <img src="./public/designs/cold.png" alt="cold-pic" />
        </div>
      )}
    </>
  )
}

export default App