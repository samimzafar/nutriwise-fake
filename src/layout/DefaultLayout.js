import React from 'react'
import { Layout } from 'antd'
import { AppContent, AppSidebar, AppHeader } from '../components/index'

const { Content } = Layout

const DefaultLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSidebar />
      <Layout style={{ marginLeft: 250 }}>
        <AppHeader />
        <Content
          style={{
            background: '#fff',
            marginTop: 64,
          }}
        >
          <AppContent />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
