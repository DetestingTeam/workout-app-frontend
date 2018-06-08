import React, {Component} from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

  const BASE = 'process.env.REACT_APP_API_URL
class Workouts extends Component {
  constructor(props){
    super(props)
    this.state = {
      workout_name: [],
      workout_date: [],
      time: [],
      location: [],
      instructor: [],
      workouts: [],
      today: [],
      future: [],
      url: [],

    }
}


componentWillMount() {
    return fetch(BASE + '/groupworkout/future')
      .then((resp) => {
        return resp.json()
      })
      .then(workoutinfo => {
        this.setState({ workouts: workoutinfo }, this.todaysWorkouts)
      })
}

todaysWorkouts(){
  let array = []
  let farray = []
  let {workouts} = this.state
  workouts.map((element, index) => {
    if(element.workout_date == '2018-06-08'){
      array.push(element)
    } else {
      farray.push(element)
    }
  })
    this.setState({ today: array, future: farray }, this.generateUrl)

 }

generateUrl(){
  let newURL = []
  let {today} = this.state
  today.map((element, index) => {
    return(
    newURL.push('https://www.google.com/maps/embed/v1/place?key=AIzaSyDGC6QAps8ZE8-q3f_quRFafP_n13n3P0Y&q=' + element.location.replace(/\s/g, '+'))
  )})
  this.setState({ url: newURL})
  console.log(newURL);
}
generateMapCards(){
  let {today, url} = this.state
  let mapCards = today.map((element, index) => {
    return(
  <div class='map1'>

      <iframe title='frame1'
      width="400"
      height="350"
      frameborder="0"
      src={url[index]} allowfullscreen>
      </iframe>

      <Card className='card1'>
              <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                      Workout: {element.workout_name}
                  </Typography>
                  <Typography component="date">
                      Time: {element.time}
                  </Typography>
                  <Typography component="instructor">
                      Instructor: {element.instructor}
                  </Typography>
              </CardContent>
      </Card>
  </div>
)
})

return mapCards
}
  render(){
    return(
        <div>
          <div className = 'daily-workouts'>
            <h1>Today's Workouts</h1>
          </div>
          <div className = 'cardcontainer'>{this.generateMapCards()}
          </div>
              <Paper className="paper">
                <div class = 'table-title'>
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
                  {this.state.future.map((n, index) => {
                    return(
                    <TableRow>
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
