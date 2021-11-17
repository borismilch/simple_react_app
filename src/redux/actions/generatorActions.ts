import { ADD_USER, START_LOADING, END_LOADING, SHOW_SNACKBAR, SHOW_HIDE, SIGN_OUT, CHANGE_DISH_CATEGORY, CHANGE_CURRENCY_ACTION, FETCH_PRODUCTS, DECREMENT_QUANTITY, INCREMENT_QUANTITY, ADD_REVIEW } from './variables'

import { IProduct, IBasketItem, IDish, IReview } from '../../types/redux'

interface User {
  email:string
  password: string
  name?: string
  id: string
}

export const createSignOutAction = () => ({ type: SIGN_OUT })

export const createUserAction = <T>(payload:T ) => ({ type: ADD_USER, payload })

export const startLoading = () => ({ type: START_LOADING })

export const endLoadung = () => ({ type: END_LOADING })

export const createAlert = (payload: string) => ({ type: SHOW_SNACKBAR, payload })

export const hideAlert = () => ({ type: SHOW_HIDE })

export const changeDishCategory = (payload: string) => ({type: CHANGE_DISH_CATEGORY, payload})

export const changeCurrencyAction = (payload: string) => ({ type: CHANGE_CURRENCY_ACTION, payload })

export const generateFetchProductsAction = (payload: IProduct[]) => ({ type: FETCH_PRODUCTS, payload })

export const incrementQuantity = (payload: IDish) => ({ type: INCREMENT_QUANTITY, payload }) 

export const decrementQuantity = (payload: IDish) => ({ type: DECREMENT_QUANTITY, payload }) 

export const generateAReviewAction = (payload: IReview) => ({ type: ADD_REVIEW, payload })