import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField, Button, Card, CardContent, Snackbar} from '@material-ui/core'
import {addMove} from "../api"
import withAuth from '../components/withAuth'


class CreateMovement extends Component{
  constructor(props){
    super(props)
    this.state = {
      movement: {
        movement_name: "",
        movement_description: "",
        url: "",
        bodypart: ""
      },
      setSuccess: false,
      loginSuccess:false,
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
    let form = this.state.movement
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
    alignItems: 'center'}} id="message-id">Movement Created</span>}
        />
        <Card className="form-card">
          <CardContent variant="headline" component="h2">Create Movement</CardContent>
          <CardContent id="sign-up-form">
            <span className="text-field">
            <TextField
                label="Movement Name"
                style={{width: '300px', marginBotton: '0px'}}
                id="movement_name"
                fullWidth
                value={form.movement_name}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="text-field">
            <TextField
                label="Movement Description"
                style={{width: '300px', marginTop: '0px'}}
                id="movement_description"
                multiline
                fullWidth
                rows="4"
                value={form.movement_description}
                onChange={this.handleChange.bind(this)}
                // margin="normal"
            />
          </span>
          <span className="text-field">
            <TextField
                label="Picture/Video Link"
                style={{width: '300px'}}
                id="url"
                fullWidth
                value={form.url}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="text-field">
            <TextField
                label="Body Part Focused"
                style={{width: '300px'}}
                id="bodypart"
                fullWidth
                value={form.bodypart}
                onChange={this.handleChange.bind(this)}
            />
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
export default withRouter(withAuth(CreateMovement))
