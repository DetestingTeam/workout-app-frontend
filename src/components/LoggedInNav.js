import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class LoggedInNav extends Component{
  render(){
    return (
      <div className="nav-container">
        {/* <IconButton  color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton> */}
        <Typography variant="title" color="inherit">
          <Button href="/"><img className="navlogo" src="./assets/images/fitology.png"/></Button>
        </Typography>
        <span className="topnav">
          <Button color="inherit" style={{color:'white'}} href="/dashboard">Dashboard</Button>
          <Button color="inherit" style={{color:'white'}} href="/log">Log Workout</Button>
          <Button color="inherit" style={{color:'white'}} href="/stats">Stats</Button>
          <Button color="inherit" style={{color:'white'}} href="/groupworkouts">Group Workouts</Button>
          <Button color="inherit" style={{color:'white'}} onClick={this.props.logout.bind(this)}>Logout</Button>
        </span>
      </div>
    )
  }
}


export default LoggedInNav
