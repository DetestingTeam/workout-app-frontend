import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField, Button, Card, CardContent, Snackbar, Divider} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { addWorkout, getAllMovements } from "../api"
import withAuth from '../components/withAuth'
import MovementSelector from '../components/MovementSelector'
import MovementTable from '../components/MovementTable'



class CreateWorkout extends Component{
  constructor(props){
    super(props)
    this.state = {
      workout: {
        workout_name: "",
        workout_date: "",
        duration: "",
        difficulty: "",
        location: "",
        instructor: "",
        time: "",
        movements:[], //array we will push each new movement+reps+weight+time object into
      },
      open: false,
      movement: "", //movement we are currently adding
      movementName: "",
      sets: "",
      reps:"",
      moveDuration: "",
      allMovements:[] //from fetch
    }
  }

  componentWillMount(){
    getAllMovements().then( resp => {
      this.setState({allMovements: resp})
    })
  }
//for snackbar completion notice
  snackOpen = state => () => {
    this.setState({ open: true });
  };

  snackClose = () => {
    this.setState({ open: false });
  }
// for selector component
  movementChange = name => value => {
    let {allMovements} = this.state
    let newName
    for (var i=0; i < allMovements.length; i++) {
      if (allMovements[i].id === value) {
        newName = allMovements[i].movement_name;
      }
    }
    this.setState({
      [name]: value,
      movementName: newName
    });
  };
//for form state
  handleMoveChange(event){
    this.setState({[event.target.id]: event.target.value})
  }

  handleChange(event){
    let {workout} = this.state
    workout[event.target.id] = event.target.value
    this.setState({workout})
  }

  pushToArray(event){
    let { movements } = this.state.workout
    let oneMovement = {movement: this.state.movement, movement_name: this.state.movementName, rec_set: this.state.sets, rec_rep: this.state.reps, rec_duration: this.state.moveDuration}
    movements = movements.push(oneMovement)
    this.setState({
      movements,
      movement: "", //movement we are currently adding
      sets: "",
      reps:"",
      moveDuration: ""})
  }


  handleSubmit(event){
    event.preventDefault()
    addWorkout(this.state.workout).then(res =>{
      this.setState({ open: true,
        workout: {
          workout_date: "",
          duration: "",
          difficulty: "",
          location: "",
          instructor: "",
          time: "",
          movements:[]}
      })
    })
  }
  //to force form to response to 'Enter' keypress
  enterPressed(event) {
    if(event.key === 'Enter') {
      addWorkout(this.state.workout).then(res =>{
        this.setState({ open: true,
          workout: {
            workout_date: "",
            duration: "",
            difficulty: "",
            location: "",
            instructor: "",
            time: "",
            movements:[]}
          })
      })
    }
  }

  render(){
    let form = this.state.workout
    let one = this.state
    console.log(this.state.workout);
    return(
      <div id="sign-up-page" onKeyPress={this.enterPressed.bind(this)}>
{/* component for pop up confirmation snackbar  */}
        <Snackbar
          anchorOrigin={ {vertical: 'top', horizontal: 'center'} }
          open={this.state.open}
          onClose={this.snackClose.bind(this)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span style={{display: 'flex',
          alignItems: 'center'}} id="message-id">Workout Created</span>}
        />
{/* start form  */}
        <Card className="workout-form-card">
          <CardContent variant="headline" component="h2">Create Workout</CardContent>
          <CardContent className="create-workout-form">
            <span className="workout-field">
            <TextField
                label="Workout Name"
                style={{width: '300px'}}
                id="workout_name"
                fullWidth
                value={form.workout_name}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                type="date"
                style={{width: '200px'}}
                id="workout_date"
                fullWidth
                rows="4"
                value={form.workout_date}
                onChange={this.handleChange.bind(this)}
                margin="normal"
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Duration"
                style={{width: '100px'}}
                id="duration"
                fullWidth
                value={form.duration}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Location"
                style={{width: '200px'}}
                id="location"
                fullWidth
                value={form.location}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Instructor"
                style={{width: '200px'}}
                id="instructor"
                fullWidth
                value={form.instructor}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Start Time"
                style={{width: '200px'}}
                id="time"
                fullWidth
                value={form.time}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <div style={{width: "100%", marginTop: "3em"}} className="create-workout-form">
            <span className="selector-block">
              <MovementSelector movement={this.state.movement} handleChange={this.movementChange.bind(this)} allMovements={this.state.allMovements}/>
            </span>
            <span className="workout-field">
              <TextField
                  label="Sets"
                  style={{width: '100px'}}
                  id="sets"
                  fullWidth
                  value={one.sets}
                  onChange={this.handleMoveChange.bind(this)}
              />
            </span>
            <span className="workout-field">
              <TextField
                  label="Reps"
                  style={{width: '75px'}}
                  id="reps"
                  fullWidth
                  value={one.reps}
                  onChange={this.handleMoveChange.bind(this)}
              />
            </span>
            <span className="workout-field">
              <TextField
                  label="Duration"
                  style={{width: '100px'}}
                  id="moveDuration"
                  fullWidth
                  value={one.moveDuration}
                  onChange={this.handleMoveChange.bind(this)}
              />
            </span>
            <span className="selector-block">
              <Button variant="fab" mini color="primary" aria-label="add" onClick={this.pushToArray.bind(this)}>
                <AddIcon />
              </Button>
            </span>
            <span className="move-table">
              <MovementTable selectedMovements={this.state.workout.movements}/>
            </span>
          </div>

        </CardContent>
        <span className="action-button">
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleSubmit.bind(this)}>Create</Button>
        </span>
        </Card>
      </div>
    )
  }
}
export default withRouter(withAuth(CreateWorkout))
