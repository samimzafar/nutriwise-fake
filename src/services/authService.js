import { PROD_URL } from '../utils/constants'
import { publicApi } from '../api/axiosInstance'
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
