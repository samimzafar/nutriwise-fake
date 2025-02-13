import React from 'react'
import { Card, Col, Spin } from 'antd'
import useFailedScan from './useFailedScans'
import FailedProductTable from '../../components/Table/FailedProductTable'
const FailedScans = () => {
  const { data, columns, isLoading, handleEdit } = useFailedScan()

  return (
    <Col span={24}>
      <Card title="Failed Products" style={{ marginBottom: 24 }}>
        <div style={{ overflowX: 'auto' }}>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <Spin size="large" />
            </div>
          ) : (
            <FailedProductTable
              data={data}
              columns={columns}
              isLoading={isLoading}
              onRowClick={handleEdit}
            />
          )}
        </div>
      </Card>
    </Col>
  )
}

export default FailedScans
