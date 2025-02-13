import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { cilCheckCircle, cilPencil, cilXCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

const noRap = { whiteSpace: 'nowrap' }

const Tab3 = ({ role, ingredients, statusBadge, approve, reject }) => {
  const navigate = useNavigate()

  const handleEdit = (ingredientId) => {
    navigate(`/edit-ingredient/${ingredientId}`)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <div style={{ overflowX: 'auto' }}>
              <CTable striped hover bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Nutrient Name <span style={{ color: 'red' }}>*</span>
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Nutrient Number
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Unit Name
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Derivation Code
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Derivation Description
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Derivation ID
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Value
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Food Nutrient Source ID
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Food Nutrient Source Code
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Food Nutrient Source Description
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Rank
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Indent Level
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Food Nutrient ID
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Data Points
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Status
                    </CTableHeaderCell>
                    <CTableHeaderCell style={noRap} scope="col">
                      Actions
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {ingredients?.map((ingredient, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">
                        {index + 1}
                      </CTableHeaderCell>
                      <CTableDataCell>
                        {ingredient?.nutrientName}
                      </CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.nutrientNumber}
                      </CTableDataCell>
                      <CTableDataCell>{ingredient?.unitName}</CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.derivationCode}
                      </CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.derivationDescription}
                      </CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.derivationId}
                      </CTableDataCell>
                      <CTableDataCell>{ingredient?.value}</CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.foodNutrientSourceId}
                      </CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.foodNutrientSourceCode}
                      </CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.foodNutrientSourceDescription}
                      </CTableDataCell>
                      <CTableDataCell>{ingredient?.rank}</CTableDataCell>
                      <CTableDataCell>{ingredient?.indentLevel}</CTableDataCell>
                      <CTableDataCell>
                        {ingredient?.foodNutrientId}
                      </CTableDataCell>
                      <CTableDataCell>{ingredient?.dataPoints}</CTableDataCell>
                      <CTableDataCell>
                        <CBadge color={statusBadge(ingredient?.status)}>
                          {ingredient?.status}
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell>
                        {role === 'admin' ? (
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <CButton
                              color="success"
                              size="sm"
                              onClick={() => approve(ingredient)}
                            >
                              <CIcon icon={cilCheckCircle} />
                            </CButton>
                            <CButton
                              color="danger"
                              size="sm"
                              onClick={() => reject(ingredient)}
                            >
                              <CIcon icon={cilXCircle} />
                            </CButton>
                          </div>
                        ) : (
                          <CButton
                            color="info"
                            size="sm"
                            onClick={() => {
                              handleEdit(ingredient.id)
                            }}
                          >
                            <CIcon icon={cilPencil} />
                          </CButton>
                        )}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tab3
