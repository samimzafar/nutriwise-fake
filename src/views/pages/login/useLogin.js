import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import RoutesNames from '../../../router/routes'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { loginUser, user, error, clearError, loading } = useAuth()
  useEffect(() => {
    if (user) {
      navigate(RoutesNames.DASHBOARD)
    }
  }, [user, navigate])

  const handleSubmit = () => {
    clearError()
    loginUser({ email, password })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
    error,
    loading,
  }
}

export default useLogin
