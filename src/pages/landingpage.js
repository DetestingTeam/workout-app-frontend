import React, { Component } from 'react';
// import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core/';



class Landing extends Component {
  render() {
    return(
      <div className="landing-grid back">
          <div className="card_color">
              <img className="lp-image" src="./assets/images/findaworkout.jpeg"/>
          </div>
          <div className="card_color">
              <img className="lp-image" src="./assets/images/logaworkout.jpeg"/>
          </div>
    </div>
    )
  }
}

export default Landing;
