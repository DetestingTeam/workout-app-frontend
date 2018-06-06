import React, { Component } from 'react';
import {Paper} from '@material-ui/core'

class LogHeader extends Component{
  constructor(props){
    super(props)
    this.state = {


    }
}
    render(){
      return(
        <div style={{display: 'flex', justifyContent: 'center'}}>

          <Paper className="paper" style={{marginTop: '10px', width: '800px', maxWidth: '1000px'}}>
          <h3 style={{textAlign: 'left', marginLeft: '10vw',  marginBottom: '10px', marginTop: '10px', marginRight: '0px'}} ><h1 style={{marginBottom: '10px'}}>{this.props.setNum}:   <nbws/>Set {this.props.setNum}</h1></h3>
        </Paper></div>

      )
    }


}

export default LogHeader
