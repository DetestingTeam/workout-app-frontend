import React, { Component } from 'react';
import {Paper, Typography, Snackbar, Button, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom';
import './logworkout.css'



const Auth = new AuthService()

const BASE = process.env.REACT_APP_API_URL


class LogWorkout extends Component{
  constructor(props){
    super(props)
    this.state = {
      rounds: 2,
      totalWorkouts: 2,
      fullSet: [],
      workout_id: 2,
      userhistory: {},
      userID: '',
      userhistoryAdded: false,
      workout: [],
      // checked: [],
      reps: [],
      weight: [],
      workout_name: "No Workouts Created Yet! Create a workout!",
      name: '',
      savedSet: [],
      setNum: 1,
      ttoF: false,
      workout_date: 'date',
      nodata: '',
      fancypopshit: '',
      open: false,
      stayhere: false,
    }

  }


  componentWillMount() {
    this.noStatsUser()
    let userID = Auth.getUserId()
    return fetch(BASE + '/workoutdetails?workout_id=' + this.state.workout_id)
      .then((resp) => {
        return resp.json()
      })
      .then(APIinfo => {
        console.log(APIinfo);
        this.setState({ workout: APIinfo, userID: userID, workout_name: APIinfo[0].workout_name, workout_date: APIinfo[0].workout_date})
      })
  }






  handleClose = () => {
    console.log("test");
     this.setState({ open: false });
   };

  noStatsUser(){
    let open = false
    if( this.props.history.location.state){
    if(this.props.history.location.state.nodata === true){
      open = true
  }}
this.setState({open: open})
}

  handleSubmit(event){
    let {leave} = this.state
    console.log("this.state.fullSet");
    console.log(this.state.fullSet);
    this.state.fullSet.map((element)=>{
    return fetch(BASE+'/user_histories', {
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
        .then((rawResponse) => {
            let parsedResponse = rawResponse.json()
            return parsedResponse
        }).then( userhistoryAdded => {
            console.log("Create Success!", userhistoryAdded ); this.setState({userhistoryAdded: true})
        })
    })
    console.log(this.state.userhistory);
    leave ? this.props.history.push({ pathname: '/dashboard'}) :  this.generateList()


  }



handleReps(event){
  // this.generateHistory()
  let { reps } = this.state
  reps[event.target.id] = event.target.value
  this.setState({[event.target.name]: event.target.value, reps: reps})
}

handleWeight(event){
  let weight = this.state.weight
  weight[event.target.id] = event.target.value
  this.setState({weight: weight, [event.target.name]: event.target.value})
}

nextSet(){
  let {userID, setNum, reps, weight, workout, workout_id} = this.state
  let fullSet = []
  // savedSet.push(weight)
  setNum = setNum + 1
  let falseArr = new Array(workout.length).fill(false)
  workout.forEach((element, index) => {
    fullSet.push({userhistory:{user_id: userID, workout_id: workout_id, set: setNum, movement_id: element.movement_id, rep: reps[index], weight: weight[index]}})
  })

  this.setState({leave: false, setNum: setNum, reps: new Array(workout.length).fill(''), weight: new Array(workout.length).fill(''), checked: falseArr, fullSet: fullSet}, this.handleSubmit)

}





saveAndQuit(){
}
generateHistory(){
  let {userID, reps, weight, setNum, workout, workout_id} = this.state
  let fullSet = []
  //generate movements with reps and weight:
//(:userhistory).permit(:user_id, :set, :movement_name, :workout_name, :weight, :set, :rep)

//  :workout_name[ :set setNum (:movement_name movement_name (:rep reps. :weight weight), movement(reps, set), move(reps, set)..), set: setNum()]

// WHAT API WANTS TO SEE:
// let userhistory = {userhistory:{user_id: userID, workout_id: workout_id, set: setNum, movement_id: 1, rep: 10, weight: 15}}
// // WE CAN MAKE AN ARRAY OF WHAT API WANTS TO SEE AND THEN MAP IT IN THE FETCH / POST (SEND A FULL SET)
// let fullSet = [{userhistory:{user_id: userID, workout_id: workout_id, set: setNum, movement_id: 1, rep: 10, weight: 15}},{userhistory:{user_id: userID, workout_id: workout_id, set: setNum, movement_id: 2, rep: 99, weight: 105}},{userhistory:{user_id: userID, workout_id: workout_id, set: setNum, movement_id: 3, rep: 98, weight: 95}}]
// WE CAN GENERATE THIS ARRAY VIA OUR SPECIFIC DATA COLLECTED HERE
workout.forEach((element, index) => {
  fullSet.push({userhistory:{user_id: userID, workout_id: workout_id, set: setNum, movement_id: element.movement_id, rep: reps[index], weight: weight[index]}})
})

this.setState({fullSet: fullSet, leave: true},
this.handleSubmit
)

}

randomWorkout(){
  let {totalWorkouts} = this.state
  let workout_id = Math.ceil(Math.random()*totalWorkouts)
  this.setState({workout_id: workout_id})
  this.componentWillMount()
}


//
// generateTable(){
//   let chart = this.state.workout.map((n, index) => {
//     return (
//
//       <TableRow key={n.id}>
//         <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
//           {index+1}
//         </TableCell>
//         <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
//           {n.movement_name}
//         </TableCell>
//         <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.rec_duration}</TableCell>
//         {console.log("IN generate table: reps, weight")}
//         {console.log(this.state.reps[index])}
//         {console.log(this.state.weight[index])}
//         <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.weight[index]} placeholder='lbs' type='number' style={{width: '45px'}} onChange={this.handleWeight.bind(this)}/></TableCell>
//         <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.reps[index]} onChange={this.handleReps.bind(this)} placeholder='0' type='number' style={{width: '30px'}} /></TableCell>
//         <TableCell numeric style={{padding: '0px',width: '20px', textAlign: 'center'}}>
//            {/* <Checkbox name="checked" checked={this.state.checked[index]} onChange={this.handleCheck.bind(this,n,index)} color="primary"/> */}
//        </TableCell>
//       </TableRow>
//     );
//   })
//   return chart
// }

generateList(){
  let chart = this.state.workout.map((n, index) => {
    return (
      <div>
      <div className='amovement'>
      <div className='movementbox'>

        <div className='movementimgbox'>
            <div className='moveshadingbox'></div>
            <div className='boxbox'>
            <div className='shadingbox'></div>
            <div className = 'movementimg'>
            <h3> {index+1} </h3>

            </div>
          </div>
        </div>

        <div className='movementinnerbox'>
            {/* <div className='moveshadingbox'></div> */}
            <div className='moveboxbox'>
            {/* <div className='shadingbox'></div> */}
            <div className='moveandtime'>
              <div className = 'movementtextbox'>
                  <p>{n.movement_name} <br/> {n.rec_duration}</p>
              </div>
            </div>
            <div className = 'movementtextbox'>

            </div>
            <div className = 'movementtextbox'>
              Reps
              <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.reps[index]} onChange={this.handleReps.bind(this)} placeholder='0' type='number' style={{width: '30px'}} /></TableCell>

            </div>
            <div className = 'movementtextbox'>
              Weight
              <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.weight[index]} placeholder='lbs' type='number' style={{width: '45px'}} onChange={this.handleWeight.bind(this)}/></TableCell>

            </div>
          </div>
        </div>





      </div>
      </div>


    </div>
    );
  })
  return chart
}


  // let userhistory = {set: {set: setNum, user_id: userID, movement_id:, workout_id: 2, weight: 99, set: 99, rep: 99}

  // let userhistory = {set: {set: setNum, user_id: userID, movement_id: 2, workout_id: 2, weight: 99, set: 99, rep: 99}
  // this.setState({userhistory: userhistory})
// }

//  handleReps(n, index){
//    console.log(index);
//    let reps = this.state.reps
//   console.log(event.target.value);
//    this.setState({reps: reps})
//   // this.setState({ name: event.target.checked });
// };

 //  handleCheck = name => event => {
 //   this.setState({ [name]: event.target.checked });
 // };

  render(){

    return(
      <div className='maindiv'>

        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Do a workout first!</span>}
          />
{/*
        <div className='fullwidth'>
          <div className='imagebox'>
            <div className='innerbox'>
                <div className='testbox'></div>
                <div className='boxbox'>
                <div className='shadingbox'></div>
                <div className = 'textbox'>Workout Log</div>
              </div>

            </div>
      </div>
      </div> */}

<div className='row2'>
      <div className='fullwidth'>

        <div className='imgleft'>
          <div className='innerbox'>

              <div className='boxbox'>

            </div>
          </div>
        </div>
        <div className='imgcenter'>
          <div className='innerbox'>
          </div>
        </div>
        <div className='imgright'>
          <div className='innerbox'>

              <div className='boxbox'>
              <div className='shadingbox'></div>
              <div className = 'textbox'></div>
            </div>
          </div>
        </div>
      </div>
  <div className='fullwidth'>


    <div className='boxbox'>
    <div className='shadingbox'></div>
    <div className = 'textbox'>
      <div className='workoutname'>
      {this.state.workout_name} </div>
      {this.state.workout_date} <br/>
    Core</div>
  </div>
  </div>



    <div className='fullwidth'>
      <div className='banner'>
        <div className='bannerinnerbox'>
            <div className='bannerboxbox'>
            <div className='bannershadingbox'></div>
            <div className = 'bannertextbox'>Set {this.state.setNum}: {this.state.rounds} rounds</div>
          </div>

        </div>
  </div>
  </div>

</div>


{this.generateList()}


<div className='fullwidth'>
  <div className='buttonbox'>
    <div className='abutton'>
        <div className='testbox'></div>
        <div className='boxbox'>
        <div className='shadingbox'></div>
        <div className = 'textbox' onClick={this.generateHistory.bind(this)}>Save and Quit</div>
      </div>

    </div>
    <div className='abutton'>
        <div className='testbox'></div>
        <div className='boxbox'>
        <div className='shadingbox'></div>
        <div className = 'textbox' onClick={this.nextSet.bind(this)}>Next Set</div>
      </div>

    </div>
</div>
</div>






    </div>
    )
  }

}

export default withRouter(withAuth(LogWorkout))
