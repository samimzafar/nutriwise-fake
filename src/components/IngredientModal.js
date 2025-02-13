import React, { useState, useEffect } from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CInputGroup,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

const labelMapping = {
  dataPoints: 'Data Points',
  derivationCode: 'Derivation Code',
  derivationDescription: 'Derivation Description',
  derivationId: 'Derivation ID',
  foodNutrientId: 'Food Nutrient ID',
  foodNutrientSourceCode: 'Food Nutrient Source Code',
  foodNutrientSourceDescription: 'Food Nutrient Source Description',
  foodNutrientSourceId: 'Food Nutrient Source ID',
  indentLevel: 'Indent Level',
  nutrientId: 'Nutrient ID',
  nutrientName: 'Nutrient Name',
  nutrientNumber: 'Nutrient Number',
  rank: 'Rank',
  unitName: 'Unit Name',
  value: 'Value',
}

const IngredientModal = ({
  visible,
  ingredient,
  handleClose,
  handleSubmit,
}) => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (ingredient) {
      setFormData(ingredient)
    }
  }, [ingredient])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name !== 'id' && name !== 'nutrientId') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const renderInputFields = () => {
    return Object.keys(formData).map((key) => {
      if (key !== 'id' && key !== 'nutrientId') {
        return (
          <div className="mb-3" key={key}>
            <CFormLabel htmlFor={key} className="form-label">
              {labelMapping[key] || key}
            </CFormLabel>
            <CFormInput
              id={key}
              name={key}
              value={formData[key] || ''}
              onChange={handleChange}
            />
          </div>
        )
      }
      return null
    })
  }

  return (
    <CModal
      visible={visible}
      onClose={() => handleClose(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">Edit Ingredient</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>{renderInputFields()}</CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => handleClose(false)}>
          Close
        </CButton>
        <CButton color="primary" onClick={() => handleSubmit(formData)}>
          Save changes
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default IngredientModal
