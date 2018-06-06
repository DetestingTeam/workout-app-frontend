import React, { Component } from 'react';
import {Card, Button, CardContent, Typography, CardActions, Table} from '@material-ui/core'
import './set_display.css'
class SetDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {
      set: 1,


    }
}
    render(){
      return(
        <div style={{}}>
<img className='pic' src='/images/pushpin.png'/>
          <Card style={{width: '300px', position: 'center'}}>
             <CardContent>
               <Table> </Table>
               <Typography color="textSecondary">
                 Set {this.state.set}:
               </Typography>
               <Typography style={{fontSize: '20px'}}>
                 Push Ups  &nbsp;  &nbsp; &nbsp;  30 sec
               </Typography>
              <Typography style={{fontSize: '20px'}}>
                 Pull Ups  &nbsp;  &nbsp; &nbsp;  30 sec
               </Typography>
               <Typography style={{fontSize: '20px'}}>
              Kettle Bell Swings &nbsp;   45 sec
               </Typography>
             </CardContent>
             <CardActions style={{alignItems: 'right'}}>
               <Button position="right" size="small" >Next Set</Button>
             </CardActions>
           </Card></div>

      )
    }


}

export default SetDisplay
