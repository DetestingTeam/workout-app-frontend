import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton, List, ListItemText, ListItem } from '@material-ui/core'
import AuthService from './AuthService'

const styles = {
  sideList: {
    paddingTop: 20,
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const Auth = new AuthService()

class LoggedInMobileMenu extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }
  handleLogout(){
    Auth.logout()
    this.props.history.push("/")
  }

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.sideList}>
        <List>
          <Link to="/dashboard">
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to="/log">
            <ListItem button>
              <ListItemText primary="Log Workout" />
            </ListItem>
          </Link>
          <Link to="/stats">
            <ListItem button>
              <ListItemText primary="Stats" />
            </ListItem>
          </Link>
          <Link to="/groupworkouts">
            <ListItem button>
              <ListItemText primary="Group Workout" />
            </ListItem>
          </Link>
            <ListItem button onClick={this.handleLogout.bind(this)}>
              <ListItemText primary="Logout" />
            </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <IconButton  style={{color:'white'}} color="inherit" aria-label="Menu">
          <MenuIcon onClick={this.toggleDrawer('left', true)}/>
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

LoggedInMobileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LoggedInMobileMenu))
