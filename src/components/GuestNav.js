import React, {Component} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
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


class GuestNav extends Component{
  render(){
    return(
      <div >
        <AppBar position="static">
          <Toolbar className="nav-container">
            {/* <IconButton  color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton> */}
            <Typography variant="title" color="inherit" >
            <Button color="inherit" href="/">Fitology</Button>
            </Typography>
            <span className ="topnav">
              <Button className="topnav" color="inherit" href="/login">Login</Button>
              <Button className="topnav" color="inherit" href="/register">Register</Button>
              <Button className="topnav" color="inherit" href="/groupworkouts">Group Workouts</Button>
              <Button className="topnav" color="inherit" href="/aboutus">About Us</Button>
            </span>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default GuestNav
