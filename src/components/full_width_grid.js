import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button, Card, Typography, CardActions, CardMedia, CardContent} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


// INFO NEEDED: WORKOUT_hist[workout.length]. Today's workout.

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
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
          <Paper className={classes.paper}>Motivational Message</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>You've completed ___ workouts!</Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Card className={classes.paper}>
              Today's Daily Workout:
            <br/>
            Move 1: Burpees  20 secs
            <br/>
            Move 1: Burpees  20 secs
            <br/>
            Move 1: Burpees  20 secs
            <br/>
            Move 1: Burpees  20 secs
            <br/>
            Move 1: Burpees  20 secs
            <br/>
            <Button href='/log'> Do today's Workout!</Button>
          </Card>
          </Paper>



        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Card className={classes.paper} linkto='/stats'>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
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
                      Search
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
