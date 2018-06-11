import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MapCard from '../components/MapCard'

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
           <h1 style={{marginBottom: '5px', marginTop: '0px', color: 'white', font: 'primary', fontVariant: 'small-caps', textAlign: 'center' }}> Today's Workout</h1><h3 style={{textAlign: 'center'}} > {todayDate}</h3>
         </Paper></div><br/>
          <div className = 'cardcontainer'>
            {cards}
          </div>
              <Paper className="paper">
                <div className = 'table-title'>
                <h1>Upcoming Workouts</h1>
                </div>
                <Table className="upcoming">
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
                    <TableRow key={index}>
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
            </Paper>
        </div>
        )
    }
}

export default Workouts;
