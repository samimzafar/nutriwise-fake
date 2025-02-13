import uploadImageService from '../../services/imageUploadService'
import { useMutation } from '@tanstack/react-query'
import ProductService from '../../services/productsService'
import handleApiError from '../../api/ErrorHandler'
import { useNavigate } from 'react-router-dom'
const useAddProduct = ({ ingredientsData, remainingParams }) => {
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (imageFile) => uploadImageService(imageFile),
    onSuccess: async (imageResponse) => {
      const productDataModal = {
        ean: remainingParams.ean,
        product: {
          barcode_number: remainingParams.productData.barcodeNumber,
          title: remainingParams.productData.title,
          category: remainingParams.productData.category,
          manufacturer: remainingParams.productData.manufacturer,
          brand: remainingParams.productData.brand,
          length: remainingParams.productData.length,
          width: remainingParams.productData.width,
          height: remainingParams.productData.height,
          weight: remainingParams.productData.weight,
          description: remainingParams.productData.description,
          images: [imageResponse],
        },
        ingredients: [ingredientsData],
        status: true,
      }
      await addProductdMutation.mutateAsync(productDataModal)
    },
    onError: (error) => {
      handleApiError(error, '�� Error imageUploadMutation ')
    },
  })

  const addProductdMutation = useMutation({
    mutationFn: (productData) => ProductService.addproduct(productData),
    onSuccess: () => {
      navigate('/')
    },
    onError: (error) => {
      handleApiError(error, '�� Error addProductdMutation ')
    },
  })

  return {
    mutateAsync,
    isPending,
  }
}

export default useAddProduct
