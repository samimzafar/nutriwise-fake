import React, { useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'

import { useLocation, useNavigate, useParams } from 'react-router-dom'
import EditProduct from './EditProduct'
import EditIngredient from './EditIngredient'

const keysToKeep = [
  'nutrientId',
  'nutrientName',
  'nutrientNumber',
  'unitName',
  'derivationCode',
  'derivationDescription',
  'derivationId',
  'value',
  'foodNutrientSourceId',
  'foodNutrientSourceCode',
  'foodNutrientSourceDescription',
  'rank',
  'indentLevel',
  'foodNutrientId',
  'dataPoints',
]

const EditProductTabs = () => {
  const { productId } = useParams()
  const location = useLocation()
  const { tabType } = location.state || {}
  // const all_barcodes = useSelector((state) => state.product.all_barcodes)
  const [activeTab, setActiveTab] = useState(0)
  const [activeHeading, setActiveHeading] = useState('Edit Product')
  const [savedData, setSavedData] = useState(null)
  const [savedIngredientData, setSavedIngredientData] = useState(null)

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
    if (tab === 0) setActiveHeading('Edit Product')
    if (tab === 1) setActiveHeading('Edit Ingredients')
  }
  const filterKeys = (obj, keysToKeep) => {
    return keysToKeep.reduce((newObj, key) => {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key]
      }
      return newObj
    }, {})
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{activeHeading}</strong>
            </CCardHeader>
            <CCardBody>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink
                    active={activeTab === 0}
                    onClick={() => toggleTab(0)}
                  >
                    Product
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    active={activeTab === 1}
                    onClick={() => toggleTab(1)}
                    disabled
                  >
                    Ingredient
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane visible={activeTab === 0}>
                  <EditProduct
                    onNextPress={(product) => {
                      const filteredIngObject = filterKeys(product, keysToKeep)
                      setSavedData(product)
                      setSavedIngredientData(filteredIngObject)
                      toggleTab(1)
                    }}
                    productId={productId}
                    tabType={tabType}
                  />
                </CTabPane>
                <CTabPane visible={activeTab === 1}>
                  <EditIngredient
                    savedIngredientData={savedIngredientData}
                    savedData={savedData}
                    onBackPress={() => {
                      toggleTab(0)
                    }}
                  />
                </CTabPane>
              </CTabContent>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditProductTabs
