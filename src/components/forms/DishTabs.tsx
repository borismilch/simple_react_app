import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useDispatch, useSelector, connect } from 'react-redux';
import { changeDishCategory } from '../../redux/actions/generatorActions';

import './formStyle.css'

const DishTabs: React.FC = () => {
  const dispatch = useDispatch()
  
  const category = useSelector((state: any) => state.dish.categorySelected)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue)
    dispatch(changeDishCategory(newValue))
  };

  return (
    <div className='main_tabs' style={{color: '#1d1d1d', padding: 0}}>
    <Tabs
      value={category}
      onChange={handleChange}
      textColor="inherit"
      aria-label="secondary tabs example"
      >
        <Tab style={{minWidth: 50}} value="all" label="All" />

        <Tab style={{minWidth: 50}} value="pizza" label="Pizza" />

        <Tab style={{minWidth: 50}} value="sushi" label="Sushi" />

        <Tab style={{minWidth: 50}} value="vegan" label="Vegan" />

        <Tab style={{minWidth: 50}} value="steak" label="Steak" />

        <Tab style={{minWidth: 50}} value="asian" label="Asian" />

        <Tab style={{minWidth: 50}} value="seafood" label="Seafood" />

        <Tab style={{minWidth: 50}} value="pasta" label="Pasta" />
       
    </Tabs>
    </div>
  
  )
}

export default connect(null, null)(DishTabs)
