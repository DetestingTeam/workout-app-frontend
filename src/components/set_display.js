import React, { Component } from 'react';
import {Card, Paper, Button, CardContent, Typography, CardActions, Table} from '@material-ui/core'
import './set_display.css'
import Stopwatch from 'react-stopwatch';

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
            <div className='workout-note'><Card>Today's Workout <div className='workout-name'> Ab Blaster 5000</div></Card> </div>
            <div className='workout-note-overlay'><Card>Today's Workout <div className='workout-name'> Ab Blaster 5000   <Stopwatch
                 seconds={0}
                 minutes={0}
                 hours={0}
                 limit="00:00:00"
                 withLoop={true}
                 onCallback={console.log("test");}
                 theme='primary' // theme='secondary'
                />,</div></Card> </div>

        <div className='setandpin'>
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
                 <div className='setmoves'>
                   Push Ups  &nbsp;  &nbsp; &nbsp;  30 sec
                 </div>
                 <div className='setmoves'>
                     Pull Ups  &nbsp;  &nbsp; &nbsp;  30 sec
                   </div>
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

         </div>
         <div>

        </div>
         <div className='pad'></div>
</div>
      )
    }


}

export default SetDisplay
