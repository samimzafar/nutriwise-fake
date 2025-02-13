import React from 'react'
import { Card, Col, Spin } from 'antd'
import RecentProductTable from '../../components/Table/RecentProductTable'
import useDashboard from './useDashboard'

const Dashboard = () => {
  const { dashboardColumns, dashboardData, isLoading } = useDashboard()

  return (
    <Col span={24}>
      <Card title="Recent Products">
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <Spin size="large" />
          </div>
        ) : (
          <RecentProductTable data={dashboardData} columns={dashboardColumns} />
        )}
      </Card>
    </Col>
  )
}

export default Dashboard
