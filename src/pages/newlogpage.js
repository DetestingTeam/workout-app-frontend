import React, {Component} from 'react'
import withAuth from '../components/withAuth'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout
import MotivationMessage from '../components/motivation_message'
import {Grid, Paper, Typography} from '@material-ui/core'
import '../styles/dashboard.css'
import FullWidthGrid from '../components/full_width_grid'
import { withRouter } from 'react-router-dom'
import NewLog from '../components/newlog'
import anime from 'animejs'


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

  var motivations = ["You can do it!", "Keep up the good work", "You're amazing!"]

class NewLogPage extends Component{

  AutoGrid(props) {
    const { classes } = props;
  }

  motivate(){
    var motivations = ["You can do it!", "Keep up the good work", "You're amazing!"]

  }



    render() {
      return (
        <div className='grid-cont'>
{/* <FullWidthGrid/> */}
<NewLog motivations={motivations}/>
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

export default withRouter(withAuth(NewLogPage))
