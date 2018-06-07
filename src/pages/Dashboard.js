import React, {Component} from 'react'
import withAuth from '../components/withAuth'
import AuthService from '../components/AuthService'
import { withRouter } from 'react-router-dom'

const Auth = new AuthService()

class Dashboard extends Component{


    render() {
      return (
        <div className="landing-grid back">

        </div>
      )
    }
  }

export default withRouter(withAuth(Dashboard))
