import { publicApi } from '../api/axiosInstance'

export const login = async ({ email, password }) => {
  const response = await publicApi.post('auth/superadmin/login', {
    email,
    password,
  })
  return response
}
