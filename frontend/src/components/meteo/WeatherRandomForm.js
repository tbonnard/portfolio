import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createRandomWeather } from '../../reducers/weatherReducer'

const WeatherRandomForm = () => {
    
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')


    const handleNewWeather = (e) => {
        e.preventDefault()
        dispatch(createRandomWeather({name, lat, long}))
        setName('')
        setLat('')
        setLong('')
    }

    return (
        <div>
            <h2>Enter a random location</h2>
            <form onSubmit={handleNewWeather}>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='lat' value={lat} onChange={(e) => setLat(e.target.value)}/>
                <input type="number" placeholder='long' value={long} onChange={(e) => setLong(e.target.value)}/>
                <div className=''>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )

}

export default WeatherRandomForm