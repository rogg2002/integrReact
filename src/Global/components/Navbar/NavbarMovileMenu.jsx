import { useContext } from "react";
import { CartContext } from "../../../Cart/contexts/CartContext";
import {AccountCircle, ShoppingCart} from '@mui/icons-material';
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";




const mobileMenuId = 'primary-search-account-menu-mobile';
export const renderMobileMenu = (mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen) =>{
    
      //trabajo en el codigo mui
  const {total}= useContext(CartContext)
  //...

      // .........agrego un return  

    return <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              
              <Badge badgeContent={total} color="error"> 

              {/* ....................link para carrito */}
                 <Link to='/carrito' style={{color:'black'}} >
                 

               {/*............. con {total} me carga el carrito */}
                <ShoppingCart />
                
                
                </Link>
                
              </Badge>
              
            </IconButton>
            
        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={total} color="error">
            <MailLock />
          </Badge>
        </IconButton> */}
        
      </MenuItem>
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {/* <p>Account</p> */}
      </MenuItem>
    </Menu>

  }
  
