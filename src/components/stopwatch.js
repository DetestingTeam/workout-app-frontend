import React, { Component } from 'react';
import {Button} from '@material-ui/core'

class StopWatch extends Component{
  constructor(props){
    super(props)
    this.state = {
      startTime: null,
      curTime: null,
      currentCount: 0,
      millisecs: 0,
    }
  }

// componentWillMount() {
//   this.intervalID = setInterval(this.timer.bind(this), 1000)
// setInterval( () => {
//      this.setState({
//        curTime : new Date().toLocaleString(),
//        startTime: new Date()
//      })
//    },1000)
//  }

componentWillMount() {
  this.millisectimer()
}

 // componentDidMount(){
 //     this.intervalID = setInterval(this.timer.bind(this), 1000)
 // }

 // componentWillUnmount(){
 //   clearInterval(this.intervalID)
 // }

timer(){
  this.setState({currentCount: this.state.currentCount +1})
}

millisectimer(){
  let x = setInterval(1000)
  console.log("x:")
  console.log(x);
  this.setState({
    millisecs: this.state.millisecs + 1
  })
}
startStopWatch(){
  this.intervalID = setInterval(this.timer.bind(this), 1000)
}

stopStopWatch(){
  clearInterval(this.intervalID)
}

resetStopWatch(){
  let zero = 0
  this.setState({currentCount: zero})
}

render(){
  return(
<div>
  <Button onClick={this.startStopWatch.bind(this)}> Start!</Button>
    <Button onClick={this.stopStopWatch.bind(this)}> Stop!</Button>
      <Button onClick={this.resetStopWatch.bind(this)}> Reset!</Button>
    {/* {this.state.curTime}
    {console.log(this.state.startTime)}
    {console.log(this.state.curTime) } */}
    {this.state.currentCount}
    {console.log(this.state.currentCount)}
    </div>
  )
}

}
 export default StopWatch
