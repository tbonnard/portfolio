import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/'


const createAccount = async (accountObject) => {
  const response = await axios.post(`${baseUrl}register/`, accountObject)
  return response.data
}

const checkUsername = async (username) => {
  const response = await axios.get(`${baseUrl}validate_username/${username}`)
  if (response.data.message === "username available") {return true} else {return false}
}

const userDetails = async () => {
  const response = await axios.get(`${baseUrl}user/`)
  return response.data
}


const exportedObject = { createAccount, checkUsername, userDetails }

export default exportedObject