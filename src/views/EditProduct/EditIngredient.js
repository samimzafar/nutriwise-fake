import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
  CAlert,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import useProductStore from '../../store/productStore'
const EditIngredient = ({ savedData, savedIngredientData, onBackPress }) => {
  const { updateProduct, error } = useProductStore()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // id: '',
    nutrientId: '',
    nutrientName: '',
    nutrientNumber: '',
    unitName: '',
    derivationCode: '',
    derivationDescription: '',
    derivationId: '',
    value: '',
    foodNutrientSourceId: '',
    foodNutrientSourceCode: '',
    foodNutrientSourceDescription: '',
    rank: '',
    indentLevel: '',
    foodNutrientId: '',
    dataPoints: '',
    // status: 'pending',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (savedIngredientData) {
      setFormData(savedIngredientData)
    }
  }, [savedIngredientData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const validate = () => {
    let formErrors = {}
    if (!formData.nutrientName)
      formErrors.nutrientName = 'Nutrient name is required'
    return formErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validate()
    if (Object.keys(formErrors).length === 0) {
      const updatedIngredient = { ...savedData, ...formData, status: 'pending' }
      updateProduct(updatedIngredient)
      setSubmitted(true)
      navigate(-1)
    } else {
      setErrors(formErrors)
      setSubmitted(false)
    }
  }

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>Edit Ingredient</CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="nutrientName">
                      Nutrient Name <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      id="nutrientName"
                      name="nutrientName"
                      value={formData.nutrientName}
                      onChange={handleChange}
                    />
                    {errors.nutrientName && (
                      <CAlert color="danger">{errors.nutrientName}</CAlert>
                    )}
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="nutrientNumber">
                      Nutrient Number
                    </CFormLabel>
                    <CFormInput
                      id="nutrientNumber"
                      name="nutrientNumber"
                      value={formData.nutrientNumber}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="unitName">Unit Name</CFormLabel>
                    <CFormInput
                      id="unitName"
                      name="unitName"
                      value={formData.unitName}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="derivationCode">
                      Derivation Code
                    </CFormLabel>
                    <CFormInput
                      id="derivationCode"
                      name="derivationCode"
                      value={formData.derivationCode}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="derivationDescription">
                      Derivation Description
                    </CFormLabel>
                    <CFormInput
                      id="derivationDescription"
                      name="derivationDescription"
                      value={formData.derivationDescription}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="derivationId">
                      Derivation ID
                    </CFormLabel>
                    <CFormInput
                      id="derivationId"
                      name="derivationId"
                      value={formData.derivationId}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CRow>
                  <CCol md="6">
                    <div className="mb-3">
                      <CFormLabel htmlFor="value">Value</CFormLabel>
                      <CFormInput
                        id="value"
                        name="value"
                        value={formData.value}
                        onChange={handleChange}
                      />
                    </div>
                  </CCol>
                  <CCol md="6">
                    <div className="mb-3">
                      <CFormLabel htmlFor="foodNutrientSourceId">
                        Food Nutrient Source ID
                      </CFormLabel>
                      <CFormInput
                        id="foodNutrientSourceId"
                        name="foodNutrientSourceId"
                        value={formData.foodNutrientSourceId}
                        onChange={handleChange}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="foodNutrientSourceCode">
                      Food Nutrient Source Code
                    </CFormLabel>
                    <CFormInput
                      id="foodNutrientSourceCode"
                      name="foodNutrientSourceCode"
                      value={formData.foodNutrientSourceCode}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="foodNutrientSourceDescription">
                      Food Nutrient Source Description
                    </CFormLabel>
                    <CFormInput
                      id="foodNutrientSourceDescription"
                      name="foodNutrientSourceDescription"
                      value={formData.foodNutrientSourceDescription}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="rank">Rank</CFormLabel>
                    <CFormInput
                      id="rank"
                      name="rank"
                      type="number"
                      value={formData.rank}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="dataPoints">Data Points</CFormLabel>
                    <CFormInput
                      id="dataPoints"
                      name="dataPoints"
                      type="number"
                      value={formData.dataPoints}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              {/* Additional fields can be added here */}
              <CButton color="success" className="mx-3" onClick={onBackPress}>
                Back
              </CButton>
              <CButton color="success" type="submit">
                Edit Product
              </CButton>
              {submitted && !error && (
                <CAlert color="success">
                  Ingredient updated successfully!
                </CAlert>
              )}
              {error && <CAlert color="danger">{error}</CAlert>}
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditIngredient
