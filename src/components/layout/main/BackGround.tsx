import React from 'react'

import './main.css'

import { Rating } from '@mui/material'

import { BGProps } from '../../../types/redux'

import { Typography } from '@mui/material'

export const BackGround: React.FC<BGProps> = ({bg, title, subtitle, overlay = false, raiting}) => {
 
  return (
    <>
      <div className='parent'>
        <img src={bg} style={{objectFit: 'cover', height: '100%'}} className='image' alt="asdvfd" />

        <div style={{height: '100%', width: '100%', justifyContent:'center', background: overlay? 'rgba(0,0,0, 0.6)' : 'transparent'}} className='flex_col text-center'>
          <Typography variant='h4' style={{color :'white', fontWeight: 700}}>{title}</Typography>

          <Typography variant='h6' style={{color :'white'}}>{subtitle}</Typography>

          { raiting && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <Rating name="size-medium" defaultValue={raiting} size='small' readOnly />  <span style={{color: 'white'}}>  ({raiting}) </span></div> }
        </div>
     
      </div>
    </>
  )
}
