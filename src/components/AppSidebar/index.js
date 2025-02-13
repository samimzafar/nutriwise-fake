import React from 'react'
import { Layout, Menu, Avatar, Image } from 'antd'
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import navigation from '../../_nav'
import { ImageConst } from '../../assets'
import { AppSidebarNav } from './AppSidebarNav'
import './styles.css'

const { Sider } = Layout

const AppSidebar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout() // Clear token and user data
    navigate('/login') // Redirect to the login page
  }

  return (
    <Sider
      width={250}
      className="app-sidebar"
      theme="light"
      style={{
        position: 'fixed',
        height: '100vh',
        zIndex: 2 /* Higher zIndex than header */,
      }}
    >
      <div className="sidebar-header">
        <Image
          src={ImageConst.nutwiseLogo}
          preview={false}
          width={100}
          height={100}
          alt="Nutwise Logo"
        />
      </div>
      <AppSidebarNav items={navigation} />
      <div className="sidebar-footer" onClick={handleLogout}>
        <MdLogout size={18} color="red" />
        <span style={{ color: 'red', marginLeft: '10px' }}>Logout</span>
      </div>
    </Sider>
  )
}

export default React.memo(AppSidebar)
