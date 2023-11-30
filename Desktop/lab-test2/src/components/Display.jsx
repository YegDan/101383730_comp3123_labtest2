import React from 'react'

export const Display = ({data}) => {

const toCel = data.main.temp - 273.15
  return (
    <div className="Display">
        <h2>Weather in {data.name}</h2>
        <p>Temperature is: {toCel}°C</p>
        <p>Wind Speed: {data.wind.speed}m/s</p>
        <p>Condition/Description: {data.weather[0].main} - {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
        
    </div>
  )
}
