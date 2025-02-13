import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CButton,
} from '@coreui/react'
import './ProductDetails.css'
import { GlassMagnifier } from 'react-image-magnifiers'
import RoutesNames from '../../router/routes'
import CIcon from '@coreui/icons-react'
import { cilThumbDown, cilThumbUp } from '@coreui/icons'
import { useQuery } from '@tanstack/react-query'
import { getProductsList } from '../../services/productsService'

const ProductDetails = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsList,
    staleTime: 500000,
  })
  const productWrapper = products.find((prod) => prod._id === productId)
  const [likeFlag, setLikeFlag] = useState(null)

  const handleLike = () => {
    setLikeFlag(status == 'like' ? null : 'like')
  }

  const handleDislike = () => {
    setLikeFlag(status == 'dislike' ? null : 'dislike')
  }
  if (!productWrapper) {
    return <div>Product not found</div>
  }
  const {
    status,
    product: {
      barcode_number,
      title,
      category,
      manufacturer,
      brand,
      description,
      images,
    },
  } = productWrapper

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 product-card">
          <CCardHeader>
            <h2 className="product-title">{title}</h2>
          </CCardHeader>
          <CCardBody>
            <div className="product-details-container">
              <div className="product-details-image">
                {images && images.length > 0 && (
                  <GlassMagnifier
                    imageSrc={images[0]}
                    largeImageSrc={images[0]}
                    magnifierSize="65%"
                    magnifierBorderSize={5}
                    magnifierBorderColor="rgba(255, 255, 255, .5)"
                    className="product-image-magnifier"
                    shape="Circle"
                    allowOverflow={true}
                  />
                )}
              </div>
              <div className="product-details-info">
                <CListGroup>
                  {barcode_number && (
                    <CListGroupItem>
                      <strong>Barcode:</strong> {barcode_number}
                    </CListGroupItem>
                  )}
                  {category && (
                    <CListGroupItem>
                      <strong>Category:</strong> {category}
                    </CListGroupItem>
                  )}
                  {manufacturer && (
                    <CListGroupItem>
                      <strong>Manufacturer:</strong> {manufacturer}
                    </CListGroupItem>
                  )}
                  {brand && (
                    <CListGroupItem>
                      <strong>Brand:</strong> {brand}
                    </CListGroupItem>
                  )}
                  <CListGroupItem>
                    <strong>Status:</strong> {status ? 'Active' : 'Inactive'}
                  </CListGroupItem>
                </CListGroup>
                {description && (
                  <div className="product-description">
                    <h3>Description</h3>
                    <p>{description}</p>
                  </div>
                )}
                {description && (
                  <div className="like-dislike-buttons-container">
                    <CButton
                      color={likeFlag == 'like' ? 'success' : 'primary'}
                      size="lg"
                      onClick={handleLike}
                    >
                      <CIcon icon={cilThumbUp} />
                    </CButton>
                    <CButton
                      color={likeFlag == 'dislike' ? 'danger' : 'primary'}
                      size="lg"
                      onClick={handleDislike}
                    >
                      <CIcon icon={cilThumbDown} />
                    </CButton>
                  </div>
                )}
                <div className="product-actions">
                  <CButton
                    color="primary"
                    size="lg"
                    onClick={() => navigate(RoutesNames.PRODUCTS)}
                  >
                    Back to Products
                  </CButton>
                  <CButton
                    color="dark"
                    size="lg"
                    onClick={() =>
                      navigate(RoutesNames.EDIT_PRODUCT(productId))
                    }
                  >
                    Edit Product
                  </CButton>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductDetails
