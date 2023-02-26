import React, { useEffect } from "react";
import { useSelector } from 'react-redux'

import cloud from "../../files/weather/cloud.png"
import sunCloud from "../../files/weather/sun-cloud.png"
import sun from "../../files/weather/sun.png"
import thunderstorm from "../../files/weather/thunderstorm.png"
import drizzle from "../../files/weather/drizzle.png"
import snow from "../../files/weather/snow.png"
import rain from "../../files/weather/rain.png"
import fog from "../../files/weather/fog.png"

const WeatherDetails = () => {

    const weather = useSelector(state => state.weather) 


    if (!weather) {
      return null
    }

    const number = weather.weather[0].id
    const numberString = String(number).charAt(0)
    const firstDigit = Number(numberString)

    return (
        <div>
            <div>
                {firstDigit === 2 && <img className="iconWeather" src={thunderstorm} title='thunderstorm' alt='thunderstorm'/>}
                {firstDigit === 3 && <img className="iconWeather" src={drizzle} title='drizzle' alt='drizzle'/>}
                {firstDigit === 5 && <img className="iconWeather" src={rain} title='rain' alt='rain'/>}
                {firstDigit === 6 && <img className="iconWeather" src={snow} title='snow' alt='snow'/>}
                {firstDigit === 7 && <img className="iconWeather" src={fog} title='fog' alt='fog'/>}
                {weather.weather[0].id === 800 && <img className="iconWeather" src={sun} title='sun' alt='sun'/>}
                {weather.weather[0].id > 800 && <img className="iconWeather" src={cloud} title='cloud' alt='cloud'/>}
            </div>
            <div className="weatherText">
                <a className="weatherTextLink" href={`http://maps.google.com/maps?q=${weather.name}`} target="_blank">{weather.name}</a>
                <p className="weatherTextText">{weather.main.temp}°C</p>
                {/* {weather.weather[0].description} */}
            </div>
        </div>
    )
}

export default WeatherDetails

