import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField, Button, Card, CardContent, Snackbar} from '@material-ui/core'
import {addMove} from "../api"
import withAuth from '../components/withAuth'
import MovementSelector from '../components/MovementSelector'


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
        movements: [{
          movement_id: "",
          reps: "",
          weight: "",
          set: ""
        }]
      },
      open: false
    }
  }

  snackOpen = state => () => {
    this.setState({ open: true });
  };

  snackClose = () => {
    this.setState({ open: false });
  }

  handleChange(event){
    let { movement } = this.state
    movement[event.target.id] = event.target.value
    this.setState({movement: movement})
  }
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
  enterPressed(event) {
    if(event.key === 'Enter') {
      addMove(this.state.movement).then(res =>{
        this.setState({ open: true,  movement: {
          movement_name: "",
          movement_description: "",
          url: "",
          bodypart: "" }
        })
      })
    }
  }
  render(){
    let form = this.state.workout
    return(
      <div id="sign-up-page" onKeyPress={this.enterPressed.bind(this)}>
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
          <CardContent id="sign-up-form">
            <span className="workout-field">
            <TextField
                label="Workout Name"
                style={{width: '200px'}}
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
          </span><br />
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
          <span>
            <MovementSelector />
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
