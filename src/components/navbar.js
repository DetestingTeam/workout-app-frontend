import React, { Component } from 'react';
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
    let { loggedIn } = this.state
    loggedIn = Auth.loggedIn()
    console.log(loggedIn);
    if (loggedIn === true){
      let { userId } = this.state
      userId = Auth.getUserId()
      this.setState({loggedIn, userId})
    }
  }
  render(){
    if(this.state.loggedIn){
      return(
        <span>
          <LoggedInNav id={this.state.userId} logout={this.props.logout.bind(this)}  />
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
