import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Workouts from './groupworkouts';
import About from './aboutus';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import Dashboard from './Dashboard'
import UserHistory from './user_history'
import CreateMovement from './create_movement'
import CreateWorkout from './create_workout'
import LogWorkout from './log_workout'
import WorkoutPage from './workout_page'

class Main extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={SignUpForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/groupworkouts" component={Workouts} />
        <Route path="/aboutus" component={About} />
        <Route exact path ="/moves" render={(props) => <CreateMovement />} />
        <Route exact path ="/newworkout" render={(props) => <CreateWorkout />} />
        <Route exact path ="/stats" render={(props) => <UserHistory />} />
        <Route exact path ="/log" render={(props) => <LogWorkout path="/log"/>} />
        <Route exact path ="/new" render={(props) => <WorkoutPage />} />
      </Switch>
    )
  }
}

export default withRouter(Main);
