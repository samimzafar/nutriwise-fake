import React from 'react'
import { Card, Typography, Button, Tooltip, Spin } from 'antd'
import {
  DatabaseOutlined,
  NumberOutlined,
  FileTextOutlined,
  CodeOutlined,
  SortAscendingOutlined,
  BarChartOutlined,
  ExperimentOutlined,
  InfoCircleOutlined,
  TagOutlined,
} from '@ant-design/icons'
import './style.css'
import { useLocation } from 'react-router-dom'
import useAddProduct from './useAddProduct'

const { Title, Text } = Typography

const IngredientDetails = () => {
  const location = useLocation()
  const { ingredientsData, remainingParams } = location.state
  const { mutateAsync, isPending } = useAddProduct({
    ingredientsData,
    remainingParams,
  })

  const InfoItem = ({ icon, label, value, color }) => (
    <Tooltip title={`${label}: ${value}`}>
      <div className="info-item">
        {React.cloneElement(icon, { style: { color, fontSize: '20px' } })}
        <Text className="info-label">{label}</Text>
        <Text strong className="info-value">
          {value}
        </Text>
      </div>
    </Tooltip>
  )

  return (
    <Card className="ingredient-details-container">
      <Title level={4} className="ingredient-title">
        <ExperimentOutlined /> Ingredient Details
      </Title>
      <div className="ingredient-info-container">
        <InfoItem
          icon={<TagOutlined />}
          label="Unit"
          value={ingredientsData.unitName}
          color="#6166ca"
        />
        <InfoItem
          icon={<InfoCircleOutlined />}
          label="Value"
          value={ingredientsData.value}
          color="#52c41a"
        />
        <InfoItem
          icon={<SortAscendingOutlined />}
          label="Rank"
          value={ingredientsData.rank}
          color="#faad14"
        />
        <InfoItem
          icon={<NumberOutlined />}
          label="Nutrient ID"
          value={ingredientsData.nutrientId}
          color="#6166ca"
        />
        <InfoItem
          icon={<NumberOutlined />}
          label="Nutrient Number"
          value={ingredientsData.nutrientNumber}
          color="#6166ca"
        />
        <InfoItem
          icon={<DatabaseOutlined />}
          label="Food Nutrient ID"
          value={ingredientsData.foodNutrientId}
          color="#6166ca"
        />
        <InfoItem
          icon={<FileTextOutlined />}
          label="Derivation Description"
          value={ingredientsData.derivationDescription}
          color="#6166ca"
        />
        <InfoItem
          icon={<CodeOutlined />}
          label="Derivation Code"
          value={ingredientsData.derivationCode}
          color="#6166ca"
        />
        <InfoItem
          icon={<NumberOutlined />}
          label="Derivation ID"
          value={ingredientsData.derivationID}
          color="#6166ca"
        />
        <InfoItem
          icon={<FileTextOutlined />}
          label="Food Nutrition Description"
          value={ingredientsData.foodNutrientSourceDescription}
          color="#6166ca"
        />
        <InfoItem
          icon={<NumberOutlined />}
          label="Food Nutrition Source ID"
          value={ingredientsData.foodNutrientSourceId}
          color="#6166ca"
        />
        <InfoItem
          icon={<CodeOutlined />}
          label="Food Nutrition Source Code"
          value={ingredientsData.foodNutrientSourceCode}
          color="#6166ca"
        />
        <InfoItem
          icon={<BarChartOutlined />}
          label="Data Points"
          value={ingredientsData.dataPoints}
          color="#6166ca"
        />
        <InfoItem
          icon={<SortAscendingOutlined />}
          label="Indent Level"
          value={ingredientsData.indentLevel}
          color="#6166ca"
        />
      </div>
      <div className="submit-container">
        <Button
          type="primary"
          onClick={() => mutateAsync(remainingParams?.imageObjectFile)}
          size="large"
          icon={isPending ? <Spin size="small" /> : <DatabaseOutlined />}
          disabled={isPending}
        >
          {isPending ? 'Submitting...' : 'Submit Ingredient'}
        </Button>
      </div>
    </Card>
  )
}

export default IngredientDetails
