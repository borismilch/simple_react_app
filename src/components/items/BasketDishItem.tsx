import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { IBasketItem, ICurrency } from '../../types/redux'

import { incrementQuantity, decrementQuantity } from '../../redux/actions/generatorActions'

import { currencies } from '../../utils/currencies'

const BasketDishItem: React.FC<{dish: IBasketItem}> = ({dish}) => {
  const dispatch = useDispatch()

  const minus = 'https://course-react.javascript.ru/static/media/squared-minus.b5df4ee7.svg'
  const plus = 'https://course-react.javascript.ru/static/media/squared-plus.cb35a716.svg'

  const increment = () => {
    dispatch(incrementQuantity(dish))
  }

  const currencyObj: ICurrency = currencies[useSelector((state: any) => state.loading.currency)]

  const toCurrencies = (val: number) => {
    return (val * currencyObj.mul) + ".00" + currencyObj.symbol
  }

  const decrement = () => {
    (dish? dish.count : 0) && dispatch(decrementQuantity(dish))
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 500}}>
      <span>{dish.name}</span>

      <div style={{ display: 'flex', gap: 12 }}>

        <div style={{ display: 'flex', gap: 5 }}>
          <img style={{cursor: 'pointer'}} onClick={decrement.bind(null)} src={minus} alt="minus" />
          <span style={{width: '20px', display: 'flex', justifyContent: 'flex-end'}}> {dish.count} </span>
          <img  style={{cursor: 'pointer'}} onClick={increment.bind(null)} src={plus} alt="minus" />
        </div>

        <span style={{minWidth: '40px', display: 'flex', justifyContent: 'flex-end', whiteSpace: 'nowrap'}}> { toCurrencies(dish.cost * dish.count) } </span>

      </div>
     
    </div>
  )
}

export default connect(null, null)(BasketDishItem)