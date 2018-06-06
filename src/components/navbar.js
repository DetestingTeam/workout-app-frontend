import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AuthService from './AuthService'
import LoggedInNav from './LoggedInNav'
import GuestNav from './GuestNav'

const Auth = new AuthService()

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      userId: null
    }
  }

  componentWillMount(){
    let {loggedIn} = this.state
    loggedIn = Auth.loggedIn()
    if (loggedIn === true){
      let { userId } = this.state
      userId = Auth.getUserId()
      this.setState({loggedIn, userId})
    }
  }

  handleLogout(){
    let { loggedIn } = this.state
    Auth.logout()
    this.setState({loggedIn: false})
    this.props.history.push("/")
  }
  render(){
    if(this.state.loggedIn){

      return(
        <span>
          <LoggedInNav id={this.state.userId} logout={this.handleLogout.bind(this)}  />
        </span>
      )
    } else {
      return(
        <span>
          <GuestNav />
        </span>
      )
    }
  }
}

export default Navbar
