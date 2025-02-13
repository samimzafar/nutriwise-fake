import { api } from '../api/axiosInstance'
import handleApiError from '../api/ErrorHandler'
import { END_POINTS } from '../utils/constants'

export const getProductsList = async () => {
  try {
    const response = await api.get('admin/listProducts')
    if (response.status === 200) {
      return response.data.products
    }
  } catch (error) {
    handleApiError(error, 'Error fetching products list')
  }
}

export const getFailedProductsList = async () => {
  try {
    const response = await api.get('barcodes/list')
    if (response.status == 200) {
      return response.data.products
    }
  } catch (error) {
    handleApiError(error, 'Error fetching failed products list')
  }
}

export const upsertProduct = async (data) => {
  try {
    const response = await api.post('admin/upsertProduct', data)
    return response.data
  } catch (error) {
    handleApiError(error, 'Error upserting product')
  }
}

export const changeStatus = async (data) => {
  try {
    const response = await api.patch(`admin/status/${data.ean}`, data)
    return response.data
  } catch (error) {
    handleApiError(error, 'Error changing product status')
  }
}

const addproduct = async (data) => {
  try {
    const response = await api.post(END_POINTS.ADMIN.adminProducts, data)
    if (!response.status == 200) {
      throw new Error('Failed to add prod')
    }
    return response.data
  } catch (error) {
    handleApiError(error, 'Error adding product')
  }
}

const ProductService = {
  addproduct,
}
export default ProductService
