import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton, List, ListItemText, ListItem, Divider} from '@material-ui/core'
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  sideList: {
    paddingTop: 20,
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class GuestMobileMenu extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.sideList}>
        <List>
          <Link to="/login">
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>
          <Link to="/register">
            <ListItem button>
              <ListItemText primary="Register" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/groupworkouts">
            <ListItem button>
              <ListItemText primary="Group Workout" />
            </ListItem>
          </Link>
          <Link to="/aboutus">
            <ListItem button>
              <ListItemText primary="About Us" />
            </ListItem>
          </Link>
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

GuestMobileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuestMobileMenu);
