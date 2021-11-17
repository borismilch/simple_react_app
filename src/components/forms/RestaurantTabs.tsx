import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useDispatch, useSelector, connect } from 'react-redux';
import { changeDishCategory } from '../../redux/actions/generatorActions';

import './formStyle.css'

const ReataurantTabs: React.FC<{selected: string, changeSelected: (val: string) => void}> = ({selected, changeSelected}) => {
  const dispatch = useDispatch()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    changeSelected(newValue)
  };

  return (
    <div className='main_tabs' style={{color: '#1d1d1d', padding: '0px'}}>
    <Tabs
      value={selected}
      onChange={handleChange}
      textColor="inherit"
      aria-label="secondary tabs example"
      >
        <Tab style={{minWidth: 50}} value="menu" label="Menu" />

        <Tab style={{minWidth: 50}} value="reviews" label="Reviews" />
    </Tabs>
    </div>
  
  )
}

export default connect(null, null)(ReataurantTabs)
