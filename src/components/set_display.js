import React, { Component } from 'react';
import {Card, Paper, Button, CardContent, Typography, CardActions, ButtonBase} from '@material-ui/core'
import './set_display.css'
import { withStyles } from '@material-ui/core/styles';
import NewLog from './newlog'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',

  },
  image: {
    position: 'relative',
    backgroundColor: 'primary',
    margin: '0.5%',
    padding: '40px',
    border: '40px',
    height: 200,
    '& $imageTitle': {
      border: '4px solid currentColor',
    },

    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: .15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  // imageMarked: {
  //   height: 3,
  //   width: 18,
  //   backgroundColor: theme.palette.common.white,
  //   position: 'absolute',
    // bottom: -2,
    // left: 'calc(50% - 9px)',
    // transition: theme.transitions.create('opacity'),
  // },
});



const images = [
  {
    url: '/assets/images/padandpencil.jpeg',
    title: "Booty Blaster!",
    width: '100%',
    height: '30px',
  },
  // {
  //   // url: '/assets/images/blankgraphpaper.jpeg',
  //   title: "Today's Workout",
  //   width: '49%',
  //   link: '/new',
  // },
  // {
  //   // url:  '/assets/images/padandpencil.jpeg',
  //   title: 'Browse Workouts',
  //   width: '49%',
  //   link: '/workouts',
  // },

];


class SetDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {
      set: 1,
    }
}





    render(){
      return(

      <div>
          <div className='myroot'>
            <ButtonBase className='myimage' focusVisibleClassName='myfocusvisible' style={{
                width: '100%',
                height: '80px',
              }}>
              <span className='myimageSRC' style={{
                backgroundPosition: 'fixed',
                backgroundImage: "url('/assets/images/padandpencil.jpeg')"
              }}></span>
              <span className='myimagebackdrop'></span>
              <span className='myimagebutton'>
                <Typography className='myimagetitle'>
                  <span className='mytopimagemarked'>Log a Workout!</span>
                </Typography>
              {/* <img className='myimage' src='/assets/images/padandpencil.jpeg'/> Picture here */}
            </span>
            </ButtonBase>
            <div className='myimage' focusVisibleClassName='myfocusvisible' style={{
              
              }}>
              <span className='myimageSRC' style={{
                backgroundPosition: 'fixed',
                opacity: '.1',
                backgroundImage: "url('/assets/images/barbell.jpeg')"
              }}></span>
              <span className='myimagebackdrop'></span>
              <span className='myimagebutton'>
                <Typography className='myimagetitle'>
                  <span className='myimagemarked'>
                    <h3>Today's Workout:<br/>
                    Ab Blaster 5000</h3>
                    <h4> Set 1: </h4>
                    <table className='setTable'>
                     <tr>
                       <th>Sit ups:</th>  <td>45 sec</td>
                     </tr>
                     <tr>
                       <th>Push ups:</th>  <td>45 sec</td>
                     </tr>
                     <tr>
                       <th>Pull ups:</th>  <td>45 sec</td>
                     </tr>


                     </table>
                  </span>
                </Typography>
              {/* <img className='myimage' src='/assets/images/padandpencil.jpeg'/> Picture here */}
            </span>
          </div>





            </div>


  <div className= 'flextits'>


        <div className="contain-box">
            <div className='workout-note'><Card>Today's Workout <div className='workout-name'> Ab Blaster 5000</div></Card> </div>
            <div className='workout-note-overlay'><Card>Today's Workout <div className='workout-name'> Ab Blaster 5000  </div></Card> </div>

        <div className='setandpin'>
          <div className='pic'>
            <img alt='pin' src='/images/pushpin1.png'/>
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
</div>
      )
    }


}

export default withStyles(styles)(SetDisplay)
