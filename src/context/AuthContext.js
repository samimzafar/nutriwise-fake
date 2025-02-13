import React, { createContext, useContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { login as loginService } from '../services/authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const getTokenExpiryTime = () => {
    const now = new Date()
    const expiryTime = new Date(now.getTime() + 15 * 60 * 1000)
    return expiryTime.toISOString()
  }

  const isTokenExpired = (expiryTime) => {
    const now = new Date()
    return now > new Date(expiryTime)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loginUser')
    localStorage.removeItem('tokenExpiry')
    setToken(null)
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('loginUser')
    const tokenExpiry = localStorage.getItem('tokenExpiry')

    if (token && user && tokenExpiry) {
      if (isTokenExpired(tokenExpiry)) {
        logout()
      } else {
        setToken(token)
        setUser(user)
        const timeUntilExpiry = new Date(tokenExpiry) - new Date()
        setTimeout(logout, timeUntilExpiry)
      }
    }
    setLoading(false)
  }, [])

  const loginMutation = useMutation({
    mutationFn: loginService,
    onMutate: () => {
      setLoading(true)
      setError(null)
    },
    onSuccess: (data) => {
      if (data.status === 201) {
        const { access_token } = data.data
        const expiryTime = getTokenExpiryTime()
        localStorage.setItem('token', access_token)
        localStorage.setItem('loginUser', access_token)
        localStorage.setItem('tokenExpiry', expiryTime)
        setToken(access_token)
        setUser(access_token)
        const timeUntilExpiry = new Date(expiryTime) - new Date()
        setTimeout(logout, timeUntilExpiry)
      } else {
        setError('Invalid email or password')
      }
      setLoading(false)
    },
    onError: (error) => {
      setError('Invalid email or password')
      setLoading(false)
    },
  })

  const loginUser = async ({ email, password }) => {
    loginMutation.mutate({ email, password })
  }

  const clearError = () => setError(null)

  return (
    <AuthContext.Provider
      value={{ token, user, loading, error, loginUser, logout, clearError }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
