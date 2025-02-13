import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import {
  changeStatus,
  getFailedProductsList,
} from '../../services/productsService'
import { MdCreate } from 'react-icons/md'

const useFailedScan = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['failedProducts'],
    queryFn: getFailedProductsList,
    staleTime: 500000,
  })
  const failedScansMutation = useMutation({
    mutationFn: changeStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['failedProducts'])
    },
  })

  const updateProductStatus = (data) => {
    failedScansMutation.mutate(data)
  }

  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`, {
      state: { ean: product.ean, ref_images: product.ref_images },
    })
  }

  const productData =
    !isLoading &&
    products.map((item) => ({
      id: item?._id,
      barcodeNo: item?.ean || 'N/A',
      productName: item?.title || 'N/A',
      category: item?.category || 'N/A',
      manufacturer: item?.manufacturer || 'N/A',
      brand: item?.brand || 'N/A',
      description: item?.description || 'N/A',
      image: item?.ref_images?.[0] || '',
      status: item?.status || false,
    }))

  const productColumns = [
    {
      header: 'Barcode No',
      accessorKey: 'barcodeNo',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Title',
      accessorKey: 'productName',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Category',
      accessorKey: 'category',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Manufacturer',
      accessorKey: 'manufacturer',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Brand',
      accessorKey: 'brand',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Description',
      accessorKey: 'description',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Images',
      accessorKey: 'image',
      cell: (info) => {
        const imageUrl = info.getValue()
        return imageUrl &&
          typeof imageUrl === 'string' &&
          imageUrl.startsWith('http') ? (
          <img
            src={imageUrl}
            alt="Product"
            style={{ width: '40px', height: '40px' }}
          />
        ) : (
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
            }}
          />
        )
      },
    },
    {
      header: 'Action',
      accessorKey: 'edit',
      cell: ({ row }) => (
        <MdCreate
          onClick={(e) => {
            e.stopPropagation()
            handleEdit(row.original)
          }}
        />
      ),
    },
  ]

  return {
    data: productData || [],
    columns: productColumns,
    isLoading,
    isError,
    error,
    updateProductStatus,
  }
}

export default useFailedScan
