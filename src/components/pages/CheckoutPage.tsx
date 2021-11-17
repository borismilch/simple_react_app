import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'

import { Link } from 'react-router-dom'

import TextField from '@mui/material/TextField';

import Basket from '../layout/product/Basket'
import './pageStyles.css'

const CheckoutPage: React.FC = () => {
  const user = useSelector((state: any) => state.loading.user)
  return (
    
    <div className='container3' style={{marginTop: 110, display: 'flex'}}>
      <div style={{flex: '0 0 50%', marginRight: 25}}>

        <div>
          <span className='lab'>Name</span>
          <TextField
            style={{width: '100%'}}
            color='warning'
            id="outlined-multiline-static"
            size='small'
            defaultValue={user.name}
          />
        </div>

        <div>
          <p className='lab'>Phone Number</p>
          <TextField
            style={{width: '100%'}}
            color='warning'
            id="outlined-multiline-static"
            size='small'
            
          />
        </div>

        <div>
          <p className='lab'>"Adress"</p>
          <TextField
            style={{width: '100%'}}
            color='warning'
            id="outlined-multiline-static"
            size='small'
            
            multiline
            rows={3}
          />
        </div>

        <Link to='/thankyou' style={{textAlign: 'center'}} className='checkout_button'>Order</Link>  


      </div>

      <div style={{flex: '0 0 50%', marginRight: 15}}>
         <Basket />
      </div>
    </div>
     
  )
}

export default connect(null, null)(CheckoutPage)