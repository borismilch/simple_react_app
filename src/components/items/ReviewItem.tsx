import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IReview } from '../../types/redux'
import Rating from '@mui/material/Rating';

const ReviewItem: React.FC<{review: IReview}> = ({review}) => {

  const dispatch = useDispatch()
  
  return (
    <div className='review_item'>

      <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>

        <span className='tt'>
          { review.author }
        </span>

        <span className='ttsm'>
          { review.message }
        </span>

      </div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <Rating readOnly name="size-small" defaultValue={review.raiting} size="small" />
      </div>

    </div>
  )
}

export default connect(null, null)(ReviewItem)