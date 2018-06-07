import React, {Component} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';


class GuestNav extends Component{
  render(){
    return(

      <div className="navbarcolor">
      <AppBar position="static">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" >
          <Button href="/"><img className="navlogo" src="./assets/images/fitology.png"/></Button>
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/groupworkouts">Group Workout</Button>
          <Button color="inherit" href="/aboutus">About Us</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

export default GuestNav
