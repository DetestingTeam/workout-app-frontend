import React, {Component} from 'react';
import { Typography, Button } from '@material-ui/core/';
import GuestMobileMenu from './GuestMobileMenu'


class GuestNav extends Component{
  render(){
    return(

      <div className="nav-container">
          <Typography variant="title" color="inherit" >
            <Button href="/"><img className="navlogo" src="./assets/images/fitology.png" alt="Fitology Logo"/></Button>
          </Typography>
          <span className="topnav desktop">
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/login">Login</Button>
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/register">Register</Button>
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/groupworkouts">Group Workout</Button>
            <Button className="navbutton" style={{color:'white'}} color="inherit" href="/aboutus">About Us</Button>
          </span>
          <span className="mobile">
            <GuestMobileMenu />
          </span>
    </div>
    )
  }
}

export default GuestNav
