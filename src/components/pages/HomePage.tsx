import React from 'react'
import './pageStyles.css'

import bg from '../../assets/bg.jpg'

import { BackGround } from '../layout/main/BackGround'
import DishTabs from '../forms/DishTabs'
import ProductList from '../layout/main/ProductList'

export const HomePage: React.FC = () => {
  return (
    <div style={{paddingTop: 60}}>
      <BackGround bg={bg} title='Order food' subtitle= 'From 175 restaurants' />

      <DishTabs />

      <div className='container'>
        <ProductList />
      </div> 
    
    </div>
  )
}

