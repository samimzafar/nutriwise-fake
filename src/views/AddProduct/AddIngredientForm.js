import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Form, Input, Button, Row, Col, Card, Space } from 'antd'
import {
  SaveOutlined,
  InfoCircleOutlined,
  NumberOutlined,
  BarChartOutlined,
  DatabaseOutlined,
  FontSizeOutlined,
  FileTextOutlined,
  CodeOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'

const { TextArea } = Input

const AddIngredientForm = ({ onSubmit }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitWithValidation = (data) => {
    navigate('/addproduct/add-ingredient-list', {
      state: {
        ingredientsData: data,
        remainingParams: location.state.remainingParams,
      },
    })
  }

  return (
    <Card className="add-ingredient-container">
      <Form layout="vertical" onFinish={handleSubmit(onSubmitWithValidation)}>
        <Row gutter={16} className="form-wrapper">
          <Col span={8}>
            <Controller
              name="nutrientName"
              control={control}
              rules={{ required: 'Nutrient Name is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Nutrient Name"
                  validateStatus={errors.nutrientName ? 'error' : ''}
                  help={errors.nutrientName?.message}
                >
                  <Input
                    {...field}
                    placeholder="Nutrient Name"
                    prefix={<FontSizeOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="nutrientId"
              control={control}
              rules={{ required: 'Nutrient ID is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Nutrient ID"
                  validateStatus={errors.nutrientId ? 'error' : ''}
                  help={errors.nutrientId?.message}
                >
                  <Input
                    {...field}
                    placeholder="Nutrient ID"
                    prefix={<NumberOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="unitName"
              control={control}
              rules={{ required: 'Unit Name is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Unit Name"
                  validateStatus={errors.unitName ? 'error' : ''}
                  help={errors.unitName?.message}
                >
                  <Input
                    {...field}
                    placeholder="Unit Name"
                    prefix={<InfoCircleOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Row gutter={16} className="form-wrapper">
          <Col span={8}>
            <Controller
              name="derivationDescription"
              control={control}
              rules={{ required: 'Derivation Description is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Derivation Description"
                  validateStatus={errors.derivationDescription ? 'error' : ''}
                  help={errors.derivationDescription?.message}
                >
                  <TextArea
                    {...field}
                    placeholder="Derivation Description"
                    prefix={<FileTextOutlined />}
                    rows={4}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="derivationCode"
              control={control}
              rules={{ required: 'Derivation Code is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Derivation Code"
                  validateStatus={errors.derivationCode ? 'error' : ''}
                  help={errors.derivationCode?.message}
                >
                  <Input
                    {...field}
                    placeholder="Derivation Code"
                    prefix={<CodeOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="derivationID"
              control={control}
              rules={{ required: 'Derivation ID is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Derivation ID"
                  validateStatus={errors.derivationID ? 'error' : ''}
                  help={errors.derivationID?.message}
                >
                  <Input
                    {...field}
                    placeholder="Derivation ID"
                    prefix={<NumberOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Row gutter={16} className="form-wrapper">
          <Col span={8}>
            <Controller
              name="foodNutrientSourceDescription"
              control={control}
              rules={{ required: 'Food Nutrition Description is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Food Nutrition Description"
                  validateStatus={
                    errors.foodNutrientSourceDescription ? 'error' : ''
                  }
                  help={errors.foodNutrientSourceDescription?.message}
                >
                  <TextArea
                    {...field}
                    placeholder="Food Nutrition Description"
                    prefix={<FileTextOutlined />}
                    rows={4}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="foodNutrientSourceId"
              control={control}
              rules={{ required: 'Food Nutrition Source ID is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Food Nutrition Source ID"
                  validateStatus={errors.foodNutrientSourceId ? 'error' : ''}
                  help={errors.foodNutrientSourceId?.message}
                >
                  <Input
                    {...field}
                    placeholder="Food Nutrition Source ID"
                    prefix={<NumberOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="nutrientNumber"
              control={control}
              rules={{ required: 'Nutrient Number is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Nutrient Number"
                  validateStatus={errors.nutrientNumber ? 'error' : ''}
                  help={errors.nutrientNumber?.message}
                >
                  <Input
                    {...field}
                    placeholder="Nutrient Number"
                    prefix={<NumberOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Row gutter={16} className="form-wrapper">
          <Col span={8}>
            <Controller
              name="foodNutrientId"
              control={control}
              rules={{ required: 'Food Nutrient ID is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Food Nutrient ID"
                  validateStatus={errors.foodNutrientId ? 'error' : ''}
                  help={errors.foodNutrientId?.message}
                >
                  <Input
                    {...field}
                    placeholder="Food Nutrient ID"
                    prefix={<DatabaseOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="indentLevel"
              control={control}
              rules={{ required: 'Indent Level is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Indent Level"
                  validateStatus={errors.indentLevel ? 'error' : ''}
                  help={errors.indentLevel?.message}
                >
                  <Input
                    {...field}
                    placeholder="Indent Level"
                    prefix={<SortAscendingOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="dataPoints"
              control={control}
              rules={{ required: 'Data Points are required' }}
              render={({ field }) => (
                <Form.Item
                  label="Data Points"
                  validateStatus={errors.dataPoints ? 'error' : ''}
                  help={errors.dataPoints?.message}
                >
                  <Input
                    {...field}
                    placeholder="Data Points"
                    prefix={<BarChartOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Row gutter={16} className="form-wrapper">
          <Col span={8}>
            <Controller
              name="foodNutrientSourceCode"
              control={control}
              rules={{ required: 'Food Nutrition Source Code is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Food Nutrition Source Code"
                  validateStatus={errors.foodNutrientSourceCode ? 'error' : ''}
                  help={errors.foodNutrientSourceCode?.message}
                >
                  <Input
                    {...field}
                    placeholder="Food Nutrition Source Code"
                    prefix={<CodeOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="value"
              control={control}
              rules={{ required: 'Value is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Value"
                  validateStatus={errors.value ? 'error' : ''}
                  help={errors.value?.message}
                >
                  <Input
                    {...field}
                    placeholder="Value"
                    prefix={<NumberOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col span={8}>
            <Controller
              name="rank"
              control={control}
              rules={{ required: 'Rank is required' }}
              render={({ field }) => (
                <Form.Item
                  label="Rank"
                  validateStatus={errors.rank ? 'error' : ''}
                  help={errors.rank?.message}
                >
                  <Input
                    {...field}
                    placeholder="Rank"
                    prefix={<SortAscendingOutlined />}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Form.Item className="btn-container">
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              size="large"
              className="add-ingredient-btn"
            >
              Add Ingredient
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default AddIngredientForm
