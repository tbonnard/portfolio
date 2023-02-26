import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

import { getWeather, getRandomWeather } from '../../reducers/weatherReducer'
import WeatherDetails from "./WeatherDetails";
import { setNotification } from "../../reducers/notifReducer";

import weatherServices from '../../services/weather'


const Weather = () => {
  const dispatch = useDispatch()


  const SuccessGeoLoc = (position) => {
    if (position.coords) {
      dispatch(getWeather(position.coords))
    } else {
      dispatch(getWeather(position))
    }
  }


  const getCoordsRandomWeather = async () => {
    const weatherDetails = await weatherServices.randomWeather()
    const object = {latitude:weatherDetails.lat, longitude:weatherDetails.long}
    SuccessGeoLoc(object)

  }
  const updateErrorCount = (error) => {
    if (error.code) {
      dispatch(setNotification({message:'Ne pouvant accéder à votre géolocalisation, une météo au hasard est affichée pour vous faire voyager', style:'error'}))
      getCoordsRandomWeather()
    }
  }

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };
      navigator.geolocation.getCurrentPosition(SuccessGeoLoc, updateErrorCount, options)
  }, [])

    return (
        <div>
            <WeatherDetails />
        </div>
    )
}

export default Weather

