import axios from 'axios'

const baseUrl = '/api/visitor/'

const getVisitorDetails = async (id) => {
    const response = await axios.get(`${baseUrl}${id}`)
    // console.log(response.data)
    return response.data
}

const createVisitor = async (object) => {
    const response = await axios.post(`${baseUrl}`, object)
    console.log(response.data)
    return response.data
}

const exportedObject = { getVisitorDetails, createVisitor }
export default exportedObject
