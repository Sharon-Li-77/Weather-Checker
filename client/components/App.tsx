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
  // console.log('weather', data.weathercode[selected])

  return (
    <>
      <h1> Your Weather-Checker ! 🌞 </h1>

      <div>
        <select
          name="weather"
          id="weather"
          value={selected}
          onChange={handlechange}
          className="date"
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
        {data && data.weathercode && data.weathercode[selected] && (
          <p className="weathercode">
            {data.weathercode[selected] >= 0 &&
            data.weathercode[selected] <= 10 ? (
              <div>
                <img
                  className="picture"
                  src="./public/designs/sun.jpg"
                  alt="csun-pic"
                />
              </div>
            ) : data.weathercode[selected] > 10 &&
              data.weathercode[selected] <= 60 ? (
              <img src="./public/designs/sun-cloud.jpg" alt="cloud-pic" />
            ) : data.weathercode[selected] > 61 &&
              data.weathercode[selected] <= 84 ? (
              <img src="./public/designs/wind.jpg" alt="wind-pic" />
            ) : data.weathercode[selected] >= 85 &&
              data.weathercode[selected] <= 100 ? (
              <img src="./public/designs/snow.gif" alt="snow-pic" />
            ) : (
              ''
            )}
          </p>
        )}
      </div>

      {data && data.temperature_2m && data.temperature_2m[selected] && (
        <div className="temperature">
          Temperature:
          {data.temperature_2m[selected]}°
        </div>
      )}
    </>
  )
}

export default App
