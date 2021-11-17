import React, {useEffect} from 'react'
import ProductItem from '../../items/ProductItem'
import { useDispatch, useSelector, connect } from 'react-redux'
import { fetchProducts } from '../../../redux/actions/dishActions'
import { IProduct } from '../../../types/redux'
import { Loader } from '../Loader' 

const ProductList: React.FC = () => {
  const dispatch = useDispatch()
  const products: IProduct[]  = useSelector((state: any) => state.dish.products)
  const category = useSelector((state: any) => state.dish.categorySelected)

  const filteredProducts = category === 'all' ? products : products.filter(pr => pr.categories.includes(category))

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
    { products.length ? (filteredProducts.map(product => <ProductItem product={product} />)) : <Loader /> }
    </>
  )
}

export default connect(null, null)(ProductList)