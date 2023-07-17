



import * as React from 'react';
//import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
//import MenuItem from '@mui/material/MenuItem';
//import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import MailIcon from '@mui/icons-material/Mail';
//import NotificationsIcon from '@mui/icons-material/Notifications';
//import MoreIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { CartContext } from '../../../Cart/contexts/CartContext';
import { MoreVert, /*SearchOutlined,*/ ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { renderMobileMenu } from './NavbarMovileMenu';
import { renderMenu } from './NavbarMenu';
//import { SearchIconWrapper } from '../../styles/navbarStyled,js';
//import { StyledInputBase } from '../../styles/navbarStyled,js';
//import { Search } from '../../styles/navbarStyled,js';
import { NavbarDrawer } from './NavbarDrawer';





//import { grey } from '@mui/material/colors';

const mobileMenuId = 'primary-search-account-menu-mobile';


export const Navbar =()=> {

  //trabajo en el codigo mui
  const {total}= useContext(CartContext)
  //...



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };






  

  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>


         {/* Menu desplegable */}
        <NavbarDrawer />

          {/* Icono Batman */}

         
          
          {/* <IconButton rel='icon'
            href='../../assets/img/icono.jpg'
            //size="large"
            //edge="start"
            
            //aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            
            
          </IconButton> */}

          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            BATMAN SALES
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              
              <Badge badgeContent={total} color="error"> 

              {/* ....................link para carrito */}
                 <Link to='/carrito' style={{color:'white'}} >

               {/*............. con {total} me carga el carrito */}
                <ShoppingCart />
                </Link>
              </Badge>
            </IconButton>
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ..............trabajo en codigo */}
      {renderMobileMenu (mobileMoreAnchorEl,
                         isMobileMenuOpen,
                         handleMobileMenuClose,
                         handleProfileMenuOpen)}
      {renderMenu ( anchorEl, handleMenuClose, isMenuOpen)}
    </Box>
  );
}