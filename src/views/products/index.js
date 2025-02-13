import React from 'react'
import { Card, Row, Col, Spin } from 'antd'
import ProductTable from '../../components/Table/ProductTable'
import useProducts from './useProducts'
import './styles.css' // Import custom CSS if needed

const Products = () => {
  const { columns, data, isLoading, handleNavigate } = useProducts()

  return (
    <Col span={24}>
      <Card
        title="Products Listing"
        style={{ marginBottom: 24 }} // Add margin bottom for spacing
      >
        <div style={{ overflowX: 'auto' }}>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <Spin size="large" />
            </div>
          ) : (
            <ProductTable
              data={data}
              columns={columns}
              isLoading={isLoading}
              onRowClick={handleNavigate}
            />
          )}
        </div>
      </Card>
    </Col>
  )
}

export default Products
