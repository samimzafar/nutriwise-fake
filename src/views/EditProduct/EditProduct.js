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

import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useProductStore from '../../store/productStore'

const EditProduct = ({ productId, tabType, onNextPress }) => {
  const { updateBarcode, error, products, all_barcodes } = useProductStore()
  const navigate = useNavigate()

  const product = products.find((product) => product.id === productId)

  const barcode = all_barcodes.find((barcode) => barcode.id === productId)

  const [formData, setFormData] = useState({
    id: '',
    barcode_number: '',
    barcode_formats: '',
    mpn: '',
    model: '',
    asin: '',
    title: '',
    category: '',
    manufacturer: '',
    brand: '',
    contributors: '',
    age_group: '',
    nutrition_facts: '',
    energy_efficiency_class: '',
    color: '',
    gender: '',
    material: '',
    pattern: '',
    format: '',
    multipack: '',
    size: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    release_date: '',
    description: '',
    features: '',
    images: '',
    stores: '',
    reviews: '',
    status: 'pending',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (product) {
      setFormData(product)
    }
    if (barcode) {
      setFormData(barcode)
    }
  }, [product, barcode])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const validate = () => {
    let formErrors = {}
    if (!formData.barcode_number)
      formErrors.barcode_number = 'Barcode number is required'
    return formErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validate()
    if (Object.keys(formErrors).length === 0) {
      const updatedProduct = { ...formData, status: 'pending' } // Ensure status is set to 'pending'
      if (tabType === 'failedBarcode') {
        updateBarcode(updatedProduct)
        setSubmitted(true)
        navigate(-1)
      } else {
        onNextPress(updatedProduct)
      }
    } else {
      setErrors(formErrors)
      setSubmitted(false)
    }
  }

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="barcode_number">
                      Barcode Number <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      id="barcode_number"
                      name="barcode_number"
                      value={formData.barcode_number}
                      onChange={handleChange}
                    />
                    {errors.barcode_number && (
                      <CAlert color="danger">{errors.barcode_number}</CAlert>
                    )}
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="barcode_formats">
                      Barcode Formats
                    </CFormLabel>
                    <CFormInput
                      id="barcode_formats"
                      name="barcode_formats"
                      value={formData.barcode_formats}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="mpn">MPN</CFormLabel>
                    <CFormInput
                      id="mpn"
                      name="mpn"
                      value={formData.mpn}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="model">Model</CFormLabel>
                    <CFormInput
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="asin">ASIN</CFormLabel>
                    <CFormInput
                      id="asin"
                      name="asin"
                      value={formData.asin}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="title">
                      Title <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="category">
                      Category <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="manufacturer">
                      Manufacturer <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      id="manufacturer"
                      name="manufacturer"
                      value={formData.manufacturer}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="brand">
                      Brand <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormInput
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="description">
                      Description <span style={{ color: 'red' }}>*</span>
                    </CFormLabel>
                    <CFormTextarea
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="color">Color</CFormLabel>
                    <CFormInput
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="size">Size</CFormLabel>
                    <CFormInput
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="length">Length</CFormLabel>
                    <CFormInput
                      id="length"
                      name="length"
                      value={formData.length}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="width">Width</CFormLabel>
                    <CFormInput
                      id="width"
                      name="width"
                      value={formData.width}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="height">Height</CFormLabel>
                    <CFormInput
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="weight">Weight</CFormLabel>
                    <CFormInput
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="energy_efficiency_class">
                      Energy Efficiency Class
                    </CFormLabel>
                    <CFormInput
                      id="energy_efficiency_class"
                      name="energy_efficiency_class"
                      value={formData.energy_efficiency_class}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
                <CCol md="6">
                  <div className="mb-3">
                    <CFormLabel htmlFor="release_date">Release Date</CFormLabel>
                    <CFormInput
                      id="release_date"
                      name="release_date"
                      value={formData.release_date}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>

              <CButton color="success" type="submit">
                Next
              </CButton>
              {submitted && !error && (
                <CAlert color="success">Product updated successfully!</CAlert>
              )}
              {error && <CAlert color="danger">{error}</CAlert>}
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditProduct
