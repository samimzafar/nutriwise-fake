// axiosInstance.js
import axios from 'axios'
import { PROD_URL } from '../utils/constants'

export const publicApi = axios.create({
  baseURL: PROD_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api = axios.create({
  baseURL: PROD_URL,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - redirecting to login')
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

// authService.js
export const login = async ({ email, password }) => {
  try {
    console.log('Making login request to:', `${PROD_URL}/auth/superadmin/login`)
    const response = await publicApi.post('/auth/superadmin/login', {
      email,
      password,
    })
    console.log('Login response:', response)
    return response
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}
