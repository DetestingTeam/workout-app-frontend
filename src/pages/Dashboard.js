import React, {Component} from 'react'
import withAuth from '../components/withAuth'
//import MotivationMessage from '../components/motivation_message'
import '../styles/dashboard.css'
import { withRouter } from 'react-router-dom'
import ButtonBases from '../components/button_base'
import anime from 'animejs'


//const Auth = new AuthService()
// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });

  var motivations = ["You can do it!", "Keep up the good work", "You're amazing!"]

class Dashboard extends Component{

  // AutoGrid(props) {
  //   const { classes } = props;
  // }

  // motivate(){
  //   var motivations = ["You can do it!", "Keep up the good work", "You're amazing!"]
  //
  // }

  buttonAnimation(){

    var maxElements = 250;
    var duration = 1500;
    var toAnimate = [];
    var radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    var distance = radius / 4 <= 150 ? 150 : radius / 4;
    var colors = ['#833ab4', '#fd1d1d', '#fcb045', '#3f2b96'];

    // var createElements = (function() {
    // var fragment = document.createDocumentFragment();
    // for (var i = 0; i < maxElements; i++) {
    //   var el = document.createElement('div');
    //   el.classList.add('particule');
    //   el.style.color = colors[anime.random(0, 3)];
    //   toAnimate.push(el);
    //   fragment.appendChild(el);
    // }
    // document.body.appendChild(fragment);
    // })();

    var animate = function(el, i) {
    var angle = Math.random() * Math.PI * 2;
    anime({
      targets: el,
      translateX: [0, Math.cos(angle) * distance],
      translateY: [0, Math.sin(angle) * distance],
      scale: [
        {value: [0, 1], duration: 200, easing: 'easeOutBack'},
        {value: 0, duration: 200, delay: duration - 400, easing: 'easeInBack'}
      ],
      offset: (duration / maxElements) * i,
      duration: duration,
      easing: 'easeOutSine',
      loop: false
    });
    }

     toAnimate.forEach(animate);
  }

    render() {
      return (
        <div className='grid-cont'>
{/* <FullWidthGrid/> */}
<ButtonBases animate={this.buttonAnimation.bind(this)} motivations={motivations}/>
</div>
    //     <div className="landing-grid back">
    //       <div className='topmessage'>
    //         <Typography variant='headline' align='center' component= 'h2' color='Error'> YOU CAN DO IT! </Typography>
    //       </div>
    //       <div className="outer1">
    //         <h1> some shit </h1>
    // </div>
    //     </div>

    // <
 )
    }
  }

export default withRouter(withAuth(Dashboard))
