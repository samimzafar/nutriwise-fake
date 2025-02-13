import React from 'react'
import { getProductsList } from '../../services/productsService'
import { useQuery } from '@tanstack/react-query'

function useDashboard() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsList,
    staleTime: 500000,
  })
  const dashboardData =
    isLoading == false &&
    products?.map((item) => {
      return {
        image: item.product?.images?.[0],
        productName: item.product?.title || 'N/A',
        category: item.product?.category || 'N/A',
        manufacturer: item.product?.manufacturer || 'N/A',
        brand: item.product?.brand || 'N/A',
        barcodeNo: item.product?.barcode_number || 'N/A',
        description: item.product?.description || 'N/A',
        status: item?.status || false,
      }
    })

  const dashboardColumns = [
    {
      header: 'Image',
      accessorKey: 'image',
      cell: (info) => {
        const imageUrl = info.getValue()
        return imageUrl &&
          typeof imageUrl == 'string' &&
          imageUrl.startsWith('http') ? (
          <img
            src={imageUrl}
            alt="Product"
            style={{ width: '50px', height: '50px' }}
          />
        ) : (
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
            }}
          />
        )
      },
    },
    {
      header: 'Product Name',
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
      header: 'Barcode No',
      accessorKey: 'barcodeNo',
      cell: (info) => info.getValue() || 'N/A',
    },
    {
      header: 'Description',
      accessorKey: 'description',
      cell: (info) => info.getValue() || 'N/A',
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
          rgb(255, 242, 226)
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
    },
    // {
    //   header: 'Action',
    //   accessorKey: 'actions',
    //   cell: () => (
    //     <select>
    //       <option value="edit">Edit</option>
    //     </select>
    //   ),
    // },
  ]

  return {
    isLoading,
    dashboardData: dashboardData || [],
    dashboardColumns,
  }
}

export default useDashboard
