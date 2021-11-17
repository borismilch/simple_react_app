import React, { useState } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { RouteParams } from '../../types/redux'

import { IProduct } from '../../types/redux'
import { IDish } from '../../types/redux'

import { BackGround } from '../layout/main/BackGround'
import ReataurantTabs from '../forms/RestaurantTabs'
import ProductMenu from '../layout/product/ProductMenu'
import ProductReviews from '../layout/product/ProductReviews'
import Basket from '../layout/product/Basket'

import OrderItem from '../items/OrderItem'

const ProductPage: React.FC = () => {
  const [selected, setSelected] = useState('menu')
  const dispatch = useDispatch()
  const { id } = useParams<RouteParams>()
  const products = useSelector((state: any) => state.dish.products)
  const current = products.find((p: IProduct) => p.id === id)

  const changeSelected = (val: string) => {
    setSelected(val)
  }

  return (
    <>
    <div style={{paddingTop: 60, height: 220, position: 'relative'}}>
    <BackGround 
      overlay={true} 
      raiting={current.raiting} 
      bg={current.background} 
      title={current.title} 
      subtitle={current.categories.join(', ')} 
      />
      <ReataurantTabs selected={selected} changeSelected={changeSelected} />
      <div className="container2">
        { 
          selected === 'menu' ? 
          <ProductMenu 
            menu={<>{ current.dishes.map((d: IDish) => <OrderItem key={d.name} dish={d} />) }</>} 
            basket={ <Basket/> }
          /> 
          : 
          <ProductReviews prod={current} /> 
        }
      </div>
      
    </div>
     
    </>
  )
}

export default connect(null, null)(ProductPage)
