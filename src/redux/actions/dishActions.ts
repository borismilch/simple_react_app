import { Dispatch, IProduct, IReview } from "../../types/redux"
import { db } from '../../libs/firebase'

import { generateFetchProductsAction, generateAReviewAction, createAlert, hideAlert } from "./generatorActions"

import { push } from 'connected-react-router'
import { collection, doc, addDoc, getDoc, getDocs, arrayUnion, updateDoc } from 'firebase/firestore'
import {  } from './generatorActions'

export const addItemToDB = (payload: IProduct) => {
  return async (dispatch: Dispatch) => {
    const productRef = collection(db, 'products')
    await addDoc(productRef, payload)
    console.log(payload)
  }
}

export const fetchProducts = (products: IProduct[] = []) => {
  return async (dispatch: Dispatch) => {

    const productsRef = collection(db, 'products')
    const productsDocs = await getDocs(productsRef)

    productsDocs.forEach((pr) => {
      products.push({...pr.data(), id: pr.id} as IProduct)
    })

    dispatch(generateFetchProductsAction(products))
  }
}

export const addReview = (payload: IReview) => {
  return async (dispatch: Dispatch) => {
    const productRef = doc(db, 'products', payload.target)
    await updateDoc(productRef, {
      comments: arrayUnion(payload)
    })
    dispatch(createAlert('REWIEW_CREATED'))

    setTimeout(() => {dispatch(hideAlert())}, 4000)
  }
}