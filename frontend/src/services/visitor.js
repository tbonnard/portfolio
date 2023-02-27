import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/visitor/'

const getVisitorDetails = async (id) => {
    const response = await axios.get(`${baseUrl}${id}`)
    return response.data
}

const createVisitor = async (object) => {
    const response = await axios.post(`${baseUrl}`, object)
    // console.log(response.data)
    return response.data
}

const exportedObject = { getVisitorDetails, createVisitor }
export default exportedObject
