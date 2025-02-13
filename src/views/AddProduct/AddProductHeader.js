import React from 'react'
import { Card, Breadcrumb, Typography } from 'antd'
import { MdHomeFilled } from 'react-icons/md'
import { COLORS } from '../../assets'
import './style.css'
const { Text } = Typography

import { useLocation } from 'react-router-dom'

const AddProductHeader = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const getBreadcrumbStyle = (path) => {
    if (path == currentPath) {
      return { color: '#6166ca', fontWeight: 'bold' }
    }
  }

  return (
    <Card style={{ marginBottom: 10, padding: 0 }}>
      <Breadcrumb
        style={{ padding: '4px 16px', borderBottom: '1px solid #f0f0f0' }}
      >
        <Breadcrumb.Item>
          <MdHomeFilled size={20} color={COLORS.lightBlue} />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Text style={getBreadcrumbStyle('/addproduct')}>New Product</Text>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Text style={getBreadcrumbStyle('/addproduct/add-ingredient')}>
            Ingredients
          </Text>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Text style={getBreadcrumbStyle('/addproduct/add-ingredient-list')}>
            Ingredients List
          </Text>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  )
}

export default AddProductHeader
