import { CHANGE_DISH_CATEGORY, FETCH_PRODUCTS, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../actions/variables'
import { IAction, IBasketItem, IProduct } from '../../types/redux'
import { IBasket } from '../../types/redux'


const initializeState = {
  categorySelected: 'all',
  products: [] as IProduct[],
  basket: {} as IBasket
}

export const dishReducer = (state: { categorySelected: string, basket: IBasket } = initializeState, action: IAction) => {
  console.log(state.basket)
  switch (action.type) {
    case CHANGE_DISH_CATEGORY: return { ...state, categorySelected: action.payload }
    case FETCH_PRODUCTS: return { ...state, products: action.payload }

    case DECREMENT_QUANTITY: return { 
      ...state, basket: { 
        ...state.basket,
        [action.payload.name]: 
        { ...action.payload, 
          count: ( state.basket[action.payload.name].count) - 1 
        }
    }}

    case INCREMENT_QUANTITY: return { 
      ...state, basket: { 
        ...state.basket,
        
        [action.payload.name]: 

        { ...action.payload, 
          count: ( state.basket[action.payload.name] ?  state.basket[action.payload.name].count : 0) + 1 
        }
    }}

    default: return state
  }
  
}