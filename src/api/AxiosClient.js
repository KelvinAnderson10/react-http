import axios from "axios"
export const clientInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})