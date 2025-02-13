import React, { useEffect } from 'react'
import { useColorModes } from '@coreui/react'
import './scss/style.scss'
import AppRoutes from './router/ProtectedRoute'

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    'coreui-free-react-admin-template-theme',
  )

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme =
      urlParams.get('theme') &&
      urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }
  }, [])

  return <AppRoutes />
}

export default App
