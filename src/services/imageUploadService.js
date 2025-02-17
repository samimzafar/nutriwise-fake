import axios from 'axios'
import { PROD_URL, END_POINTS } from '../utils/constants'

const uploadImageService = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const response = await axios.post(
    `${PROD_URL}/${END_POINTS.UPLOAD}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
  if (!response.status == 201) {
    throw new Error('Failed to update user')
  }
  return response.data.s3FileUrl
}
export default uploadImageService
