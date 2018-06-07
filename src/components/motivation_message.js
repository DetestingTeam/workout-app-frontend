import React, { Component } from 'react';
import {Paper, Typography} from '@material-ui/core'

class MotivationMessage extends Component{
render(){
  return(
    <div className = 'motivator'>
      <Typography variant='headline' align='center' component= 'h2' color='Error'> YOU CAN DO IT! </Typography>
      </div>
  )
}
}
export default MotivationMessage
