import axios from 'axios'

const baseUrl = '/api/message/'

const sendMessage = async (object) => {
    const response = await axios.post(`${baseUrl}`, object)
    return response
}

const exportedObject = { sendMessage }
export default exportedObject
