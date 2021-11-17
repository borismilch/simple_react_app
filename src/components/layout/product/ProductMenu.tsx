import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const ProductMenu: React.FC<{ menu: ReactJSXElement, basket: ReactJSXElement }> = ({menu, basket}) => {
  return (
    
    <div style={{marginTop: 30, display: 'flex'}}>
      <div style={{flex: '0 0 50%', marginRight: 25}}>
        { menu }
      </div>

      <div style={{flex: '0 0 50%', marginRight: 15}}>
         { basket }
      </div>
    </div>
     
  )
}

export default connect(null, null)(ProductMenu)