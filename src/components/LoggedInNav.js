import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import LoggedInMobileMenu from './LoggedInMobileMenu'


class LoggedInNav extends Component{
  render(){

    return (
      <div className="nav-container">
        <Typography variant="title" color="inherit">
          <Button href="/"><img className="navlogo" src="./assets/images/fitology.png"/></Button>
        </Typography>
        <span className="topnav desktop">
          <Button color="inherit" style={{color:'white'}} href="/dashboard">Dashboard</Button>
          <Button color="inherit" style={{color:'white'}} href="/log">Log Workout</Button>
          <Button color="inherit" style={{color:'white'}} href="/stats">Stats</Button>
          <Button color="inherit" style={{color:'white'}} href="/groupworkouts">Group Workouts</Button>
          <Button color="inherit" style={{color:'white'}} onClick={this.props.logout.bind(this)}>Logout</Button>
        </span>
        <span className="mobile">
          <LoggedInMobileMenu />
        </span>
      </div>
    )
  }
}


export default LoggedInNav
