import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import RoutesNames from '../../router/routes'
import { getProductsList } from '../../services/productsService'

const useProducts = () => {
  const navigate = useNavigate()
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsList,
    staleTime: 500000,
  })
  const handleNavigate = (id) => {
    navigate(RoutesNames.PRODUCT_DETAILS(id))
  }

  const getStatusBadge = (status) => {
    return status ? 'success' : 'warning'
  }

  const productData =
    !isLoading &&
    products.map((item) => ({
      _id: item?._id,
      barcodeNo: item?.ean || 'N/A',
      productName: item.product?.title || 'N/A',
      category: item.product?.category || 'N/A',
      manufacturer: item.product?.manufacturer || 'N/A',
      brand: item.product?.brand || 'N/A',
      image: item.product?.images?.[0] || '',
      status: item?.status || false,
    }))

  const productColumns = [
    {
      header: 'Barcode No',
      accessorKey: 'barcodeNo',
      cell: (info) => info.getValue() || 'N/A',
      enableSorting: false,
    },
    {
      header: 'Product Name',
      accessorKey: 'productName',
      cell: (info) => info.getValue() || 'N/A',
      enableSorting: true,
    },
    {
      header: 'Category',
      accessorKey: 'category',
      cell: (info) => info.getValue() || 'N/A',
      enableSorting: true,
    },
    {
      header: 'Manufacturer',
      accessorKey: 'manufacturer',
      cell: (info) => info.getValue() || 'N/A',
      enableSorting: false,
    },
    {
      header: 'Brand',
      accessorKey: 'brand',
      cell: (info) => info.getValue() || 'N/A',
      enableSorting: false,
    },
    {
      header: 'Image',
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
      enableSorting: false,
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (info) => {
        const status = info.getValue()
        let bgColor = ''
        let value = ''
        let fontColor = ''
        if (status == true) {
          bgColor = 'rgba(222,238,232,1)'
          fontColor = 'rgba(81,156,102,1)'
          value = 'Completed'
        } else if (status == false) {
          bgColor = 'rgba(253,234,233,1)'
          fontColor = 'rgba(211,116,116,1)'
          value = 'Failed'
        } else if (status == 'Pending') {
          bgColor = 'rgba(255,242,226,1)'
          fontColor = 'rgba(28,29,34,1)'
          value = 'Pending'
        }
        return (
          <div
            style={{
              backgroundColor: bgColor,
              padding: '5px',
              borderRadius: '5px',
              color: fontColor,
            }}
          >
            {value}
          </div>
        )
      },
      enableSorting: false,
    },
  ]

  return {
    data: productData || [],
    columns: productColumns,
    isLoading,
    handleNavigate,
    getStatusBadge,
  }
}

export default useProducts
