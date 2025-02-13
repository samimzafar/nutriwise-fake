import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Row, Col } from 'antd'
import AddProductHeader from './AddProductHeader'
import AddIngredientForm from './AddIngredientForm'
import IngredientDetails from './IngredientsDetails'
import AddProductForm from './AddProductForm'

const AddProductIndex = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <AddProductHeader />
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Routes>
            <Route path="/" element={<AddProductForm />} />
            <Route path="add-ingredient" element={<AddIngredientForm />} />
            <Route path="add-ingredient-list" element={<IngredientDetails />} />
          </Routes>
        </Col>
      </Row>
    </>
  )
}

export default AddProductIndex
