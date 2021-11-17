import './reviewsStye.css'

import TextField from '@mui/material/TextField';

import { IReview } from '../../../types/redux'

import { addReview, fetchProducts } from '../../../redux/actions/dishActions'; 

import Rating from '@mui/material/Rating';

import React, {useState, SyntheticEvent} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

const ReviewsForm: React.FC<{target: string}> = ({target}) => {

  const dispatch = useDispatch()

  const user = useSelector((state: any) => state.loading.user)

  const [message, setMessage] = useState('')
  const [rait, setRait] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const raitingHandler = (e: SyntheticEvent<Element, Event>, value: number | null) => {
    value && setRait(value)
  } 

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const messageData: IReview = { author: user.name, message, raiting: rait, target }

    dispatch(addReview(messageData))
    setMessage('')
    dispatch(fetchProducts())
    
  }

  return (
    <form className='rev_form' onSubmit={submitHandler.bind(null)} style={{marginTop: 20}}>
      <h4 style={{marginTop: 0}} className='rev_form__title'>Leave your review</h4>

      <TextField
        style={{width: '80%'}}
        id="outlined-multiline-static"
        placeholder='enter your review'
        multiline
        value={message}
        color='warning'
        rows={4}
        onChange={handleChange}
        defaultValue=" "
      />
      <div style={{display: 'flex', gap: 5, alignItems: 'center', marginTop: 15}}>
        <b>Raiting:</b>
        <Rating onChange={raitingHandler} name="size-small" defaultValue={5} size="small" />
      </div>

      <button type='submit' className='btn_message'>PUBLISH REVIEW</button>
      
    </form>
  )
}

export default connect(null, null)(ReviewsForm)
