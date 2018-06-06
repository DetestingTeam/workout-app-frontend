import React, {Component} from 'react'
import {TextField, Button, Card, CardContent} from '@material-ui/core'
import AuthService from "../components/AuthService"


class LoginForm extends Component{
  constructor(props){
    super(props)
    this.Auth = new AuthService()
    this.state = {
      email: "",
      password: "",
      loginSuccess: false
    }
  }

  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event){
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/dashboard')
    })
    .catch(err =>{ alert(err) })
  }

  render(){
    let form = this.state
    return(
      <div className="sign-up-page">
        <Card className="form-card">
          <CardContent variant="headline" component="h2">Log in</CardContent>
          <CardContent id="log-in-form">
          <span className="text-field">
            <TextField
                label="Email"
                style={{width: '200px'}}
                id="email"
                value={form.email}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="text-field">
            <TextField
                type="password"
                label="Password"
                style={{width: '200px'}}
                id="password"
                value={form.password}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          </CardContent>
          <span className="action-button">
            <Button variant="raised" color="primary" onClick={this.handleSubmit.bind(this)}>Log in</Button>
          </span>
        </Card>



      </div>
    )
  }
}
export default LoginForm
