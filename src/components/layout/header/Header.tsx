import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import { connect, useSelector } from 'react-redux'
import Menu from '@mui/material/Menu';

import { Link } from 'react-router-dom';

import { SignOutAction } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import HeaderTabs from './HeaderTabs';

import { useHistory } from 'react-router-dom';

import logo from '../../../assets/logo.svg'

import './header.css'

const Header: React.FC = () => {
  const history = useHistory()
  const location = useSelector((state: any) => state.router.location)
  const isId = location.pathname.split('/')[1]

  const user = useSelector((state: any) => state.loading.user)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    handleClose()
    dispatch(SignOutAction())
  }

  return (
    <Box 
      sx={{ flexGrow: 1 }}
      style={{zIndex: 10, position: 'absolute', width: '100%', top: 0}}
      >
      
      <AppBar className='header' position="static">
        <Toolbar  style={{width: '100%'}}>
          <div style={{flex: '1 1 auto', display: 'flex'}} className={ !user ? 'centered' : '' }>
           {isId && user && <Link to='/' className='go_back'>
            <ArrowBackIcon /> Reataurants 
            </Link>}
            <img onClick={() => history.push('/')} src={logo} alt="fghjk" />
          </div>
       
          {user && (
            <div style={{display: 'flex'}}>
              <HeaderTabs tabs={['UA', 'RU', 'USD']} />

              <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <div style={{display: 'flex'}}>
                  <span>{user.name}</span>
                </div>
              </div>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={signOut.bind(null)}>Вийти</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}


export default connect(null, null)(Header)