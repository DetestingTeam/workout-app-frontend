import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField, Button, Card, CardContent} from '@material-ui/core'
import {registerUser} from "../api"
import AuthService from '../components/AuthService'


class SignUpForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      registerSuccess: false,
      loginSuccess:false
    }
  }
  handleChange(event){
    let { user } = this.state
    user[event.target.id] = event.target.value
    this.setState({user: user})
  }
  handleSubmit(event){
    event.preventDefault()
    registerUser(this.state.user).then(res =>{
      this.props.history.push('/dashboard')
    })
  }
  enterPressed(event) {
    if(event.key === 'Enter') {
      registerUser(this.state.user).then(res =>{
        this.props.history.push('/dashboard')
      })
    }
  }
  render(){
    let form = this.state.user
    return(
      <div id="sign-up-page" onKeyPress={this.enterPressed.bind(this)}>
        <Card className="form-card">
          <CardContent variant="headline" component="h2">Sign up for Fitology!</CardContent>
          <CardContent id="sign-up-form">
            <span className="text-field">
            <TextField
                label="First Name"
                style={{width: '200px'}}
                id="first_name"
                value={form.first_name}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                label="Last Name"
                style={{width: '200px'}}
                id="last_name"
                value={form.last_name}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                label="Email"
                style={{width: '200px'}}
                id="email"
                value={form.email}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                type="password"
                label="Create Password"
                style={{width: '200px'}}
                id="password"
                value={form.password}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                type="password"
                label="Confirm Password"
                style={{width: '200px'}}
                id="password_confirmation"
                value={form.password_confirmation}
                onChange={this.handleChange.bind(this)}
            />
          </span>
        </CardContent>
        <span className="action-button">
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleSubmit.bind(this)}>Sign Up</Button>
        </span>
        </Card>
      </div>
    )
  }
}
export default withRouter(SignUpForm)
