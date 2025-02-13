import React, { lazy } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Spin } from 'antd'
import './style.css'

// Containers
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'))

// Pages
const Login = lazy(() => import('../views/pages/login/Login'))
const Register = lazy(() => import('../views/pages/register/Register'))
const Page404 = lazy(() => import('../views/pages/page404/Page404'))
const Page500 = lazy(() => import('../views/pages/page500/Page500'))

const ProtectedRoute = () => {
  const { token, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <Spin size="large" />
      </div>
    )
  }

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/500" element={<Page500 />} />
      <Route element={<ProtectedRoute />}>
        <Route path="*" element={<DefaultLayout />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
