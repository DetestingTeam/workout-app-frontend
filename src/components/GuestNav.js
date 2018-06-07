import React, {Component} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';


class GuestNav extends Component{
  render(){
    return(

      <div className="nav-container">
          {/* <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton> */}
          <Typography variant="title" color="inherit" >
          <Button href="/"><img className="navlogo" src="./assets/images/fitology.png"/></Button>
          </Typography>
          <span className="topnav">
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/login">Login</Button>
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/register">Register</Button>
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/groupworkouts">Group Workout</Button>
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/aboutus">About Us</Button>
          </span>
    </div>
    )
  }
}

export default GuestNav
