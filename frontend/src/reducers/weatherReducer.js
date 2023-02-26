import weatherServices from '../services/weather'

import { setNotification } from './notifReducer'


export const getWeather = (coords) =>{
    return async dispatch => {
        if (coords) {
            try {
                const weatherDetails = await weatherServices.weatherUser(coords)
                dispatch({
                    type: "GET_WEATHER",
                    data: weatherDetails
                })
            } catch(exception) {
                dispatch(setNotification({message:'error geo weather api', style:'error'}))
            }
        }
  
    }
}


// Create a new location so no need to update state as the result is not weather results
export const createRandomWeather = (object) => {
    return async dispatch => {
        const weatherDetails = await weatherServices.createRandomWeather(object)
        dispatch({
            type: "CREATE_RANDOM_WEATHER",
            data: weatherDetails
        })
    }
}


const weatherReducer = (state=null, action) => {
    switch(action.type) {
        case 'GET_WEATHER':
            return action.data
        case 'CREATE_RANDOM_WEATHER':
            return state
        default:
            return state
    }

}

export default weatherReducer