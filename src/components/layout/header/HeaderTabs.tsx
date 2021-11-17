import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { connect, useDispatch, useSelector } from 'react-redux'
import { changeCurrencyAction } from '../../../redux/actions/generatorActions';

import { amber } from '@mui/material/colors'

import './header.css'

const HeaderTabs:React.FC<{ tabs: string[] }> = ({tabs = []}) => {

  const dispatch = useDispatch()

  const currency = useSelector((state: any) => state.loading.currency)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue)
    dispatch(changeCurrencyAction(newValue))
  };  

  return (
    <Box sx={{ width: '100%' }} style={{color: '#ff9100'}}>
      <Tabs
        className='tabBar'
        value={currency}
        onChange={handleChange}
        textColor='inherit'
        
        aria-label="secondary tabs example"
      >
      {tabs.map(tab => <Tab className='headerTab' key={tab} value={tab} label={tab} /> )} 
        
      </Tabs>
    </Box>
  );
}

export default connect(null, null)(HeaderTabs)