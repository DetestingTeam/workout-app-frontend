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

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper2}>
            <Card className={classes.card1}>
              <Typography gutterBottom variant="headline" component="h2">
                Today's Workout
              </Typography>
              Set 1:
            <br/>
            Move 1: Burpees  20 secs
            <br/>
            Move 2: Push Ups  20 secs
            <br/>
            Move 3: Pull Ups  20 secs
            <br/>
            Rest 30 seconds
            <br/><br/>
            Set 2:
            <br/>
            Move 4: Squats 20 secs
            <br/>
            Move 5: Kettle Bell Swings  20 secs
            <br/>
            ....
            <br/>
              <CardActions>
            <Button size="small" color="primary" href='/log'>
              Do today's Workout!
            </Button>
              </CardActions>
          </Card>
          </Paper>



        </Grid>

        <Grid item xs={12} sm={3} href='/stats'>
          <Paper className={classes.paper} href='/stats'>
            <Link to={`/stats`} style={{textDecoration: 'none'}}>
            <Card className={classes.paper}>
              <Typography gutterBottom variant="headline" component="h2">
                My Stats
              </Typography>
                    <CardMedia
                      className={classes.media}
                      // image="/images/graph.png"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography component="p">
                        Track your progress on various movements
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" href='/stats'>
                        Check my stats
                      </Button>
                    </CardActions>
                  </Card>
                    </Link>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Link to={`/log`} style={{textDecoration: 'none'}}>
            <Card className={classes.paper}>
              <Typography gutterBottom variant="headline" component="h2">
                My Journal
              </Typography>
                    <CardMedia
                      className={classes.media2}
                      // image="/images/graph.png"
                      title="Log A Workout"
                    />
                    <CardContent>
                      <Typography component="p">
                        Choose a workout and log your reps and wieght
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" href='/log'>
                        Go to Journal
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
          </Paper>
        </Grid>


        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Card className={classes.paper}>
            <Typography gutterBottom variant="headline" component="h2">
              Update Profile
            </Typography>
                  <CardMedia
                    className={classes.media6}
                    // image="/images/graph.png"
                    title="Log A Workout"
                  />
                  <CardContent>
                    <Typography component="p">
                      Change your information
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href='/stats'>
                      Go to profile
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Link to={`/groupworkouts`} style={{textDecoration: 'none'}}>
            <Card className={classes.paper}>
            <Typography gutterBottom variant="headline" component="h2">
              Find a Class
            </Typography>
                  <CardMedia
                    className={classes.media3}
                    // image="/images/graph.png"
                    title="Log A Workout"
                  />
                  <CardContent>
                    <Typography component="p">
                      Join a class in your area
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href='/log'>
                      Find Workouts
                    </Button>
                  </CardActions>
                </Card>
              </Link>
              </Paper>
        </Grid>







        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Card className={classes.paper}>
            <Typography gutterBottom variant="headline" component="h2">
              Search Workouts
            </Typography>
                  <CardMedia
                    className={classes.media4}
                    // image="/images/graph.png"
                    title="Log A Workout"
                  />
                  <CardContent>
                    <Typography component="p">
                      Browse Workouts
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href='/log'>
                      Search Workouts
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
        </Grid>




        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Card className={classes.paper}>
            <Typography gutterBottom variant="headline" component="h2">
              Create a Workout
            </Typography>
                  <CardMedia
                    className={classes.media5}
                    // image="/images/graph.png"
                    title="Log A Workout"
                  />
                  <CardContent>
                    <Typography component="p">
                      Create a workout
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href='/log'>
                      Create a Workout
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
