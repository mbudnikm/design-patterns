import { EMPLOYEES_SVC_URL } from "./config"
import axios from "axios"

export const getEmployee = async (id) => {
    const res = await axios.get(`${EMPLOYEES_SVC_URL}/employees?${id}`)
        .then(response => response)
        .catch(err => console.log(err))
    return res.data
}