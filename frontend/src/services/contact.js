import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/message/'

const sendMessage = async (object) => {
    const response = await axios.post(`${baseUrl}`, object)
    return response
}

const exportedObject = { sendMessage }
export default exportedObject
