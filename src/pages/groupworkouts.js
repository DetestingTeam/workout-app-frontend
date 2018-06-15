import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MapCard from '../components/MapCard'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BASE = process.env.REACT_APP_API_URL
var todayDate = new Date();
var dd = todayDate.getDate();
var mm = todayDate.getMonth()+1; //January is 0!
var yyyy = todayDate.getFullYear();


if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

todayDate = yyyy + '-' + mm + '-' + dd;



class Workouts extends Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: [],
      today: []
    }
  }


componentWillMount() {
  return fetch(BASE + '/groupworkout/future')
    .then((resp) => {
      return resp.json()
    })
    .then(workoutinfo => {
      let today = workoutinfo.filter( element => element.workout_date === todayDate)

      this.setState({ workouts: workoutinfo, today: today })

    })
}

generateUrl(location){
  let locationNoSpaces = location.toString().split(' ').join('+')
  let url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDGC6QAps8ZE8-q3f_quRFafP_n13n3P0Y&q=' + locationNoSpaces
  return url
}

  render(){
    let cards = this.state.today.map((element, index) => {
      return(
        <MapCard oneElement={element} key={index} genUrl={this.generateUrl.bind(this)}/>
      )
    })
    return(
        <div>
          <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper1" style={{marginTop: '10px', width: '90vw', maxWidth: '1000px', backgroundImage: 'url("http://localhost:3001/assets/images/bannerworkout.jpeg")', backgroundColor:'rgba(1, 1, 1, 0.2)'}}>
           <h1 style={{marginBottom: '5px', marginTop: '0px', color: 'white', font: 'primary', fontVariant: 'small-caps', textAlign: 'center' }}> Today's Group Workouts</h1><h3 style={{textAlign: 'center'}} > {todayDate}</h3>
         </Paper></div><br/>
          <div className = 'cardcontainer'>
            {cards}
          </div>
          <div className='panel'>
          <ExpansionPanel className="expansionpanel">
             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
               <Typography className="classes.heading">
                 <h4>Upcoming Workouts</h4>
               </Typography>
             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
               <Table className="upcoming" >
               <TableHead>
                    <TableRow>
                        <TableCell>Workout</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Instructor</TableCell>
                    </TableRow>
                  </TableHead>
                    <TableBody>
                      {this.state.workouts.map((n, index) => {
                        return(
                        <TableRow key={index} className='expansionrow'>
                          <TableCell>{n.workout_name}</TableCell>
                            <TableCell>{n.workout_date}</TableCell>
                            <TableCell>{n.time}</TableCell>
                            <TableCell>{n.location}</TableCell>
                            <TableCell>{n.instructor}</TableCell>
                        </TableRow>
                      )
                      })}
                  </TableBody>
              </Table>
             </ExpansionPanelDetails>
           </ExpansionPanel>
         </div>

        </div>
        )
}
}



export default Workouts;
