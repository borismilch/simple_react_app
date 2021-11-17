import React from 'react'

import './itemsStyles.css'

import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { IProduct } from '../../types/redux';
import { CardActionArea } from '@mui/material'; 

import { useHistory } from 'react-router';

const ProductItem: React.FC<{product: IProduct}> = ({product}) => {
  const history = useHistory()


  const pushHistory = () => { history.push(`/product/${product.id}`) }

  return (
    <Card onClick={pushHistory.bind(null)} style={{marginBottom: 10, width: '100%'}}>
      <CardActionArea style={{display: 'flex', padding: 20}}>
        <img
          height="102"
          width="102"
          src={product.img}
          alt="green iguana"
        />
        <div style={{padding: '0px 0px 0px 12px', alignSelf: 'flex-start', flex:'1 1 auto'}}>
          <span className="prod_title">
            {product.title}
          </span>
         <span style={{display: 'block'}} className='prod_cats'>
           { product.categories.join(', ') }
         </span>
         <Rating size="small" name="read-only" value={product.raiting} readOnly />
        </div>
      </CardActionArea>
    </Card>
  );
}

export default ProductItem