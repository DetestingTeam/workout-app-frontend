import React, {Component} from 'react'
import withAuth from '../components/withAuth'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout

const Auth = new AuthService()

class Dashboard extends Component{


    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
    
        </div>
      )
    }
  }

export default withAuth(Dashboard)
