import React, { Component } from 'react';
import {Card, Paper, Button, CardContent, Typography, CardActions, Table} from '@material-ui/core'
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
        <div className= 'flextits'>
        <div className="contain-box">
          <div className='pic'>

            <img src='/images/pushpin1.png'/>

          </div>

            <div className='setlist'>
              <Paper>
                <Card>
              <Card style={{width: '300px', position: 'center'}}>
                <CardContent>
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
               </Card>
               </Card>
               </Paper>
             </div>

         </div>
         <div className='pad'></div>
</div>
      )
    }


}

export default SetDisplay
