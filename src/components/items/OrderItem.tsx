import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity } from '../../redux/actions/generatorActions'
import './itemsStyles.css'
import { ICurrency, IDish } from '../../types/redux'
import { currencies } from '../../utils/currencies'

const OrderItem: React.FC<{dish: IDish}> = ({dish}) => {

  const currencyObj: ICurrency = currencies[useSelector((state: any) => state.loading.currency)]

  const toCurrencies = (val: number) => {
    return (val * currencyObj.mul) + ".00" + currencyObj.symbol
  }

  const dispatch = useDispatch()

  const currentDish = useSelector((state: any) => state.dish.basket[dish.name])

  const increment = () => {
    dispatch(incrementQuantity(dish))
  }

  const decrement = () => {
    (currentDish? currentDish.count : 0) && dispatch(decrementQuantity(dish))
  }

  return (
    <div className='order_card' style={{display: 'flex', justifyContent: 'space-between'}}>
    
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h4 className='order_title'>{dish.name}</h4>
        <span className='order_subtitle'>{dish.categories.join(', ')}</span>
        <span className='order_price'>{toCurrencies(dish.cost)}</span>
      </div>

      <div 
        style={{
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}
        >

        <span className='counter_span'>{ currentDish? currentDish.count : 0}</span>

        <div style={{ display: 'flex', gap: '3px' }}>

          <button onClick={decrement.bind(null)} className='product_button'>
            <span>-</span>
          </button>
          
          <button onClick={increment.bind(null)} className='product_button'>
            <span>+</span>
          </button>

        </div>
      </div>

    </div>
  )
}

export default connect(null, null)(OrderItem)