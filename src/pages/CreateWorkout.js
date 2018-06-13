import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField, Button, Card, CardContent, Snackbar, Divider} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { addMove, getAllMovements } from "../api"
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
    this.setState({
      [name]: value,
    });
  };
//for form state
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }

  pushToArray(event){
    let { movements } = this.state.workout
    let oneMovement = {movement: this.state.movement, rec_set: this.state.sets, rec_rep: this.state.reps, rec_duration: this.state.moveDuration}
    movements = movements.push(oneMovement)
    this.setState({
      movements,
      movement: "", //movement we are currently adding
      sets: "",
      reps:"",
      moveDuration: ""})
  }

//TODO: change for workout and workout detail fetch POSTs
  handleSubmit(event){
    event.preventDefault()
    addMove(this.state.movement).then(res =>{
      this.setState({ open: true,  movement: {
        movement_name: "",
        movement_description: "",
        url: "",
        bodypart: "" }
      })
    })
  }
  //to force form to response to 'Enter' keypress
  //TODO: change for workout and workout detail fetch POSTs
  enterPressed(event) {
    if(event.key === 'Enter') {
      addMove(this.state.movement).then(res =>{
        this.setState({ open: true,
          movement_name: "",
          movement_description: "",
          url: "",
          bodypart: ""
        })
      })
    }
  }

  render(){
    let form = this.state
    console.log(this.state);
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


        <Card className="workout-form-card">
          <CardContent variant="headline" component="h2">Create Workout</CardContent>
          <CardContent className="create-workout-form">
            <span className="workout-field">
            <TextField
                label="Workout Name"
                style={{width: '300px'}}
                id="workout.workout_name"
                fullWidth
                value={form.workout.workout_name}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                type="date"
                style={{width: '200px'}}
                id="workout.workout_date"
                fullWidth
                rows="4"
                value={form.workout.workout_date}
                onChange={this.handleChange.bind(this)}
                margin="normal"
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Duration"
                style={{width: '100px'}}
                id="workout.duration"
                fullWidth
                value={form.workout.duration}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Location"
                style={{width: '200px'}}
                id="workout.location"
                fullWidth
                value={form.workout.location}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Instructor"
                style={{width: '200px'}}
                id="workout.location"
                fullWidth
                value={form.workout.location}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="workout-field">
            <TextField
                label="Time"
                style={{width: '200px'}}
                id="workout.location"
                fullWidth
                value={form.workout.location}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span>
            <Divider />
          </span>

          <div style={{width: "100%"}} className="create-workout-form">
            <span id="selector-block">
              <MovementSelector movement={this.state.movement} handleChange={this.movementChange.bind(this)} allMovements={this.state.allMovements}/>
            </span>
            <span className="workout-field">
              <TextField
                  label="Sets"
                  style={{width: '100px'}}
                  id="sets"
                  fullWidth
                  value={form.sets}
                  onChange={this.handleChange.bind(this)}
              />
            </span>
            <span className="workout-field">
              <TextField
                  label="Reps"
                  style={{width: '75px'}}
                  id="reps"
                  fullWidth
                  value={form.reps}
                  onChange={this.handleChange.bind(this)}
              />
            </span>
            <span className="workout-field">
              <TextField
                  label="Duration"
                  style={{width: '100px'}}
                  id="moveDuration"
                  fullWidth
                  value={form.moveDuration}
                  onChange={this.handleChange.bind(this)}
              />
            </span>
            <span id="selector-block">
              <Button variant="fab" mini color="primary" aria-label="add" onClick={this.pushToArray.bind(this)}>
                <AddIcon />
              </Button>
            </span>
          </div>
          <span>
            <MovementTable movements={this.state.workout.movements}/>
          </span>
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
