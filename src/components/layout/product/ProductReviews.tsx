import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { ProductComments } from './ProductComments'

import { IProduct } from '../../../types/redux'

import ReviewsForm from '../../forms/rewievs/ReviewsForm'

const ProductMenu: React.FC<{prod: IProduct}> = ({prod}) => {
  return (
    <>
      <div style={{marginBottom: 20}}>
       { prod.comments && <ProductComments reviews={prod.comments} /> }
      </div>
      <ReviewsForm target={prod.id} />
    </>
  )
}

export default connect(null, null)(ProductMenu)