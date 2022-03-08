import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?',
  timeout: 8000
})

export const marsApi = Axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
  timeout: 8000
})
