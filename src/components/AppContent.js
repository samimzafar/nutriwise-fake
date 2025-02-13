import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import routes from '../router'
import { useAuth } from '../context/AuthContext'
const { Content } = Layout
const AppContent = () => {
  const { user } = useAuth()
  return (
    <Content style={{}}>
      <Suspense>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={user ? <route.element /> : <Navigate to="/login" />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </Content>
  )
}

export default React.memo(AppContent)
