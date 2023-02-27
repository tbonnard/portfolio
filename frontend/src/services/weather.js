import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/weather/'

const weatherUser = async (coords) => {
    const keyapi = process.env.REACT_APP_WEATHER_API_KEY
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${keyapi}&units=metric`
    const response = await axios.get(`${baseUrl}`)
    // console.log(response.data)
    return response.data
}

const randomWeather = async () => {
    const response = await axios.get(`${baseUrl}`)
    // console.log(response.data)
    return response.data
}

const createRandomWeather = async (object) => {
    const response = await axios.post(`${baseUrl}`, object)
    console.log(response.data)
    return response.data
}

const exportedObject = { weatherUser, randomWeather, createRandomWeather }
export default exportedObject
