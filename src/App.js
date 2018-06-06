import React, { Component } from 'react';
import './App.css';
import Main from './pages/main';
import Navbar from './components/navbar';
import Footer from './components/Footer'

import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

const BASE = 'http://localhost:3000'


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }

  }
  render() {
    return (
      <div className="back">
        <CssBaseline />
        <Navbar/>
        <Main/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
