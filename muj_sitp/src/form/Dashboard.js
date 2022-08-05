
import React from 'react'
import Header from './header1.js'
import LOGO from './media/LOGO.png'
import {AppBar,Toolbar, Typography} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

function Dashboard() {
    return (
        <div>
            
            <AppBar style={{ background: 'rgba(131, 89, 34, 0.5)' }}>
                <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
                <img src={LOGO} style={{width:'100px'}}></img>
                    <Typography>
                        SCHOLARSHIP
                    </Typography>

                    <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          
            <IconButton
              aria-label="show more"
            //   aria-controls={mobileMenuId}
              aria-haspopup="true"
            //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Dashboard
