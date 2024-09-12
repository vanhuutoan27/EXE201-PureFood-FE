import { baseUrl } from "@/configs/config"
import axios from "axios"

const pureAPI = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json"
  }
})

pureAPI.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
      if (token) {
        const accessToken = token.split("=")[1]
        config.headers["Authorization"] = `Bearer ${accessToken}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

pureAPI.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default pureAPI
