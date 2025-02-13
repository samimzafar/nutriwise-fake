import React from 'react'
import { Layout, Dropdown, Menu, Avatar, Space } from 'antd'
import { BiSolidUserCircle, BiBell, BiCaretDown } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { MdEmail, MdGridView } from 'react-icons/md'
import './styles.css'

const { Header } = Layout

const AppHeader = () => {
  const routeTitles = {
    '/dashboard': {
      title: 'Dashboard',
      icon: <MdGridView className="app-header__icon" />,
    },
    '/products': {
      title: 'Product',
      icon: <MdEmail className="app-header__icon" />,
    },
    '/failed-scans': {
      title: 'Failed Scans',
    },
    '/addproduct': {
      title: 'Add Product',
    },
    '/settings': {
      title: 'Settings',
    },
  }

  const location = useLocation()
  const title = routeTitles[location.pathname]?.title || 'Dashboard'
  const IconComponent = routeTitles[location.pathname]?.icon

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  )

  return (
    <Header
      className="app-header"
      style={{
        position: 'fixed',
        zIndex: 1,
        width: 'calc(100% - 250px)' /* Adjust width to account for sidebar */,
        left: 250 /* Adjust left to match sidebar width */,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        height: 64,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="app-header__left">
        {IconComponent}
        <span className="app-header__title">{title}</span>
      </div>
      <div className="app-header__right">
        <Space size="middle">
          <span className="app-header__admin">Admin</span>
          <Dropdown overlay={menu} trigger={['click']}>
            <BiCaretDown
              className="app-header__icon"
              style={{ cursor: 'pointer' }}
            />
          </Dropdown>
          <BiBell className="app-header__icon" style={{ cursor: 'pointer' }} />
          <Avatar
            icon={<BiSolidUserCircle />}
            size="default"
            style={{ backgroundColor: '#6166ca', cursor: 'pointer' }}
          />
        </Space>
      </div>
    </Header>
  )
}

export default AppHeader
