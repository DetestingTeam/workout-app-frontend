import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',

  },
  image: {
    position: 'relative',
    backgroundColor: 'pink',
    margin: '10px',
    padding: '40px',
    border: '40px',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
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
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: '/assets/images/deadlift.jpeg',
    title: "You've done 5 workouts this week! You're amazing!!!",
    width: '100%',
    link: '/stats',
    height: '30px',
  },
  {
    url: '/assets/images/blankgraphpaper.jpeg',
    title: 'Stats',
    width: '31.29%',
    link: '/stats',
  },
  {
    url:  '/assets/images/padandpencil.jpeg',
    title: 'Log a Workout',
    width: '31.29%',
    link: '/log',
  },
  {
    url: '/assets/images/barbell.jpeg',
    title: "Today's Workout",
    width: '31.29%',
    link: '/log',
  },
  {
    url: '/assets/images/sdmap.png',
    title: "Find a Class",
    width: '31.29%',
    link: '/groupworkouts',
  },
  {
    url: '/assets/images/findaworkout.jpeg',
    title: "Browse Workouts",
    width: '31.29%',
    link: '/log',
  },
  {
    url: '/assets/images/logaworkout.jpeg',
    title: "Update Profile",
    width: '31.29%',
    link: '/stats',
  },
];

function ButtonBases(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          href={image.link}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            height: image.height,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);
