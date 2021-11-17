import React from 'react'
import { IReview } from '../../../types/redux'
import ReviewItem from '../../items/ReviewItem'

export const ProductComments: React.FC<{reviews: IReview[]}> = ({reviews}) => {
  return (
    <>
      { reviews.map(r => <ReviewItem review={r} />) }
    </>
  )
}
