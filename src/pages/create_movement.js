import React, { Component } from 'react';
import {TextField, Button, Card, CardContent} from '@material-ui/core'
import {addMove} from "../api"


class CreateMovement extends Component{
  constructor(props){
    super(props)
    this.state = {
      movement: {
        name: "",
        description: "",
        url: "",
        bodypart: "",
      },
      addMovementSuccess: false
    }
  }
  handleChange(event){
    let { movement } = this.state
    movement[event.target.id] = event.target.value
    this.setState({movement})
  }
  handleSubmit(event){
    let { movement } = this.state
    addMove(movement).then(
      this.setState({addMovementSuccess: true})
    )
    console.log(this.state.addMovementSuccess)
  }
  render(){
    let movement = this.state.movement
    return(
      <div id="add-move-form" style={{height: '100vh'}}>

        <Card className="movement-card" style={{width: '400px', margin: 'auto', marginTop: '30px'}}>
          <CardContent component="h2">Add a Movement</CardContent>
          <CardContent id="sign-up-movement">
            <span className="text-field">
            <TextField
                label="Movement Name"
                placeholder="Push-Up, Pull up... "
                halfWidth
                id="name"
                value={movement.name}
                onChange={this.handleChange.bind(this)}
            />
          </span> <emsp/><emsp/> <emsp/>  <nbsp/>   <nbsp/><nbsp/><nbsp/>
          <span className="text">
            <emsp/><emsp/> <emsp/>
            <TextField
                label="Body Part"
                placeholder="Chest, Back, Abs..."
                halfWidth
                id="last_name"
                value={movement.last_name}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span style={{position: 'center', justifyContent: 'center'}}>
            <TextField
                label="Description"
                multiline
                placeholder="Keep a tight core throughout the entire push up. Inhale as you slowly bend your elbows and lower yourself until your elbows are at a 90-degree angle. Exhale as you begin contracting your chest muscles and pushing back up through your hands to the start position. Don't lock out the elbows; keep them slightly bent "

                rowsMax="4"
                fullWidth
                style={{width: '296px'}}
                id="description"

                value={movement.email}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                label="Link"
                placeholder="Video / Photo link"
                id="link"
                fullWidth
                style={{width: '296px'}}
                value={movement.password}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />

        </CardContent>
        <span className="action-button">
          <Button variant="raised" color="primary" style={{marginBottom: '30px'}}onClick={this.handleSubmit.bind(this)}>Add to Collection</Button>
        </span>
        </Card>



      </div>
    )
  }
}
export default CreateMovement
