import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button, Card, Typography, CardActions, CardMedia, CardContent} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'


// INFO NEEDED: WORKOUT_hist[workout.length]. Today's workout.

const styles = theme => ({
  root: {
    flexGrow: 1,
    '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
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
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    hover: 'opacity: 0.7',
    color: theme.palette.text.secondary,
  },

  paper2: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: '345px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 345,
  },
  card1: {
    textAlign: 'center',
    width: '100%',
    margin: 'auto',

  },
  media: {
   height: 0,
   paddingTop: '56.25%',
   backgroundImage: 'url("http://localhost:3001/assets/images/graph.png")',
   backgroundSize: 'contain',

 },
 media2: {
  height: 0,
  paddingTop: '56.25%',
  backgroundImage: 'url("http://localhost:3001/assets/images/logaworkout.jpeg")',
  backgroundSize: 'contain',
}, media3: {
  height: 0,
  paddingTop: '56.25%',
  backgroundImage: 'url("http://localhost:3001/assets/images/sdmap.png")',
  backgroundSize: 'contain',
}, media4: {
  height: 0,
  paddingTop: '56.25%',
  backgroundImage: 'url("http://localhost:3001/assets/images/findaworkout.jpeg")',
  backgroundSize: 'contain',
},media5: {
  height: 0,
  paddingTop: '56.25%',
  backgroundImage: 'url("http://localhost:3001/assets/images/barbell.jpeg")',
  backgroundSize: 'contain',
},media6: {
  height: 0,
  paddingTop: '56.25%',
  backgroundImage: 'url("http://localhost:3001/assets/images/laidout.jpeg")',
  backgroundSize: 'contain',
},
});


function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper} onClick={console.log('entinerg')} >Motivational Message</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>You've completed ___ workouts!</Paper>
        </Grid>
</Grid>

    </div>
  )
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
