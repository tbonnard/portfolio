import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/'

const loginUser = async credentials => {
    const response = await axios.post(`${baseUrl}login/`, credentials)
    return response.data
}

const logoutUser = async ()  => {
    const response = await axios.post(`${baseUrl}logout/`)
    return response.data
}

const exportedObject = { loginUser, logoutUser }
export default exportedObject
