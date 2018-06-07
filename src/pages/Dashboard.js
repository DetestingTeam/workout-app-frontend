import React, {Component} from 'react'
import withAuth from '../components/withAuth'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout
import MotivationMessage from '../components/motivation_message'
import {Grid, Paper, Typography} from '@material-ui/core'
import '../styles/dashboard.css'
import FullWidthGrid from '../components/full_width_grid'


const Auth = new AuthService()
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Dashboard extends Component{

  AutoGrid(props) {
    const { classes } = props;
  }


    render() {
      return (
        <div className='grid-cont'>
<FullWidthGrid/>
</div>
    //     <div className="landing-grid back">
    //       <div className='topmessage'>
    //         <Typography variant='headline' align='center' component= 'h2' color='Error'> YOU CAN DO IT! </Typography>
    //       </div>
    //       <div className="outer1">
    //         <h1> some shit </h1>
    // </div>
    //     </div>

    // <
 )
    }
  }

export default withAuth(Dashboard)
