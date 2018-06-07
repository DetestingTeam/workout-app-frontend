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
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit">
              <Button href="/"><img className="navlogo" src="./assets/images/fitology.png"/></Button>
            </Typography>
            <span className="topnav">
            <Button color="inherit" href="/dashboard">Dashboard</Button>
            <Button color="inherit" href="/log">Log Workout</Button>
            <Button color="inherit" href="/stats">Stats</Button>
            <Button color="inherit" onClick={this.props.logout.bind(this)}>Logout</Button>
          </span>
          </Toolbar>
        </AppBar>
    )
  }
}


export default LoggedInNav
