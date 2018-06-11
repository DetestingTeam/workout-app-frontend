import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class MapCard extends Component{
  render(){
    let element = this.props.oneElement
    return(
      <div className='map1'>

          <iframe title='frame1'
          width="400"
          height="350"
          frameBorder="0"
          src={this.props.genUrl(element.location)}
          allowFullScreen>
          </iframe>

          <Card className='card1'>
                  <CardContent>
                      <Typography gutterBottom variant="headline" id="h2">
                          Workout: {element.workout_name}
                      </Typography>
                      <Typography id="date">
                          Time: {element.time}
                      </Typography>
                      <Typography id="instructor">
                          Instructor: {element.instructor}
                      </Typography>
                  </CardContent>
          </Card>
      </div>
    )
  }
}

export default MapCard
