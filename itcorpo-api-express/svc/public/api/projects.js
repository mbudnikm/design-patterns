import { PROJECTS_SVC_URL } from "./config"
import axios from 'axios'

export const getProject = async (id) => {
    const response = await axios.get(`${PROJECTS_SVC_URL}/projects/${id}`)
        .then(res => res)
        .catch(err => console.log(err))
    return response.data
}