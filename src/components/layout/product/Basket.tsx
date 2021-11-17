import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IBasketItem, ICurrency } from '../../../types/redux'
import { Link } from 'react-router-dom'
import { BasketQuery } from '../../items/BasketQuery'
import BasketDishItem from '../../items/BasketDishItem'
import { useLocation } from 'react-router'

import { currencies } from '../../../utils/currencies'

import './productStyles.css'

const Basket = () => {
  const basket = useSelector((state: any) => state.dish.basket)
  const basketItems: IBasketItem[] = Object.values(basket)
  const subTotal = basketItems.reduce((acc: any, b: any) => acc += (b.cost * b.count), 0)
  
  const location = useLocation()

  const dispatch = useDispatch()

  const currencyObj: ICurrency = currencies[useSelector((state: any) => state.loading.currency)]

  const toCurrencies = (val: number) => {
    return (val * currencyObj.mul) + ".00" + currencyObj.symbol
  }

  const filteredBasketItems = basketItems.filter((b: any) => b.count)

  return (
    <div className='basket'>
     <h4 className='basket_title'>{(filteredBasketItems || []).length ? 'Basket' : 'Select a meal from the list'}</h4>
      {
        (!!(filteredBasketItems.length)) && 

        <div className='basket_body' style={{gap: 3}}>

          <div className="basket_products" style={{display: 'flex', flexDirection: 'column', gap: 5}}>

           { filteredBasketItems.map(dish => <BasketDishItem dish={dish} /> )}

          </div>

          <hr className='hr' />

          <div style={{display: 'flex', flexDirection: 'column', gap:5}}>
            <BasketQuery title='Sub-Total' value={toCurrencies(subTotal)} bold={false} />  

            <BasketQuery title='Delivery cost:' value={'FREE'} bold={false} />

            <BasketQuery title='Total:' value={toCurrencies(subTotal)} bold={true} />
          </div>
           { location.pathname !== '/checkout' &&
             <Link to='/checkout' style={{textAlign: 'center'}} className='checkout_button'>Checkout</Link>  
           }
         

        </div>
      }

    </div>
  )
}


export default connect(null, null)(Basket)