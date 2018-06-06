import React, { Component } from 'react';
import './App.css';
import Main from './pages/main';
import Navbar from './components/navbar';
import Footer from './components/Footer'

import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthService from './components/AuthService'
import LoggedInNav from  './components/LoggedInNav'
import GuestNav from './components/GuestNav'

const BASE = 'http://localhost:3000'

const Auth = new AuthService()
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }
  handleLogout(){
    Auth.logout()
    this.props.history.push("/")
  }
  render() {
    return (
      <div className="back">
        <CssBaseline />
        {Auth.loggedIn ? <LoggedInNav logout={this.handleLogout.bind(this)}/> : <GuestNav />}
        <Main/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
