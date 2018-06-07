import React, { Component } from 'react';
import {Button} from '@material-ui/core'
// import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core/';
import './landingpage.css'


class Landing extends Component {
  render() {
    return(
      <div className ="full-container">
        <div className ="picone"><Button className="btn" size="large" variant="contained" color="primary" href="/groupworkouts">Find a Workout</Button></div>
        <div className ="pictwo"><Button className="btn" size="large" variant="contained" color="primary" href="/log">Log a Workout</Button></div>

  {/* <div className="landing-grid back">
        <div className="card_color">
            <img className="lp-image" src="./assets/images/findaworkout.jpeg" alt="Women Working Out"/>
            <button class="btn">Find a Workout</button>
        </div>
        <div className="card_color">
            <img className="lp-image" src="./assets/images/logaworkout.jpeg" alt="Weights"/>
            <button class="btn2">Log a Workout</button>
        </div>
  </div> */}

      </div>


    )
  }
}

export default Landing;
