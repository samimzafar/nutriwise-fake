import React, { useCallback } from 'react'
import Papa from 'papaparse' // Import PapaParse library
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import useProductStore from '../store/productStore'

const UploadCSV = ({ uploadTo = 'products' }) => {
  const {addBulkProducts,addBulkIngredients}=useProductStore()

  // Function to handle CSV file upload
  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0]
    if (file) {
      parseCSV(file)
    }
  }, [])

  // Function to parse CSV using PapaParse
  const parseCSV = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        if (results.data) {
          const parsedData = results.data.map((item) => {
            if (item.ingredients) {
              try {
                item.ingredients = JSON.parse(item.ingredients)
              } catch (error) {
                console.error('Error parsing ingredients:', error)
                item.ingredients = []
              }
            }
            return item
          })
          if (uploadTo === 'products') addBulkProducts(parsedData)
          if (uploadTo === 'ingredients')
            addBulkIngredients(parsedData)
        }
      },
      error: (error) => {
        console.error('CSV parsing error:', error)
        // Handle error state or display error message
      },
    })
  }

  return (
    // <div>
    //   <input type="file" accept=".csv" onChange={handleFileUpload} />
    // </div>
    <CInputGroup className="mb-3">
      <CInputGroupText as="label" htmlFor="inputGroupFile01">
        Upload
      </CInputGroupText>
      <CFormInput
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        id="inputGroupFile01"
      />
    </CInputGroup>
  )
}

export default UploadCSV
