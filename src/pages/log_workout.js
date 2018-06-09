import React, { Component } from 'react';
import {Paper, Snackbar, Button, Checkbox, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
import LogHeader from '../components/log_header'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom'


const Auth = new AuthService()

const BASE = process.env.REACT_APP_API_URL


class LogWorkout extends Component{
  constructor(props){
    super(props)
    this.state = {
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
    return fetch(BASE + '/workoutdetails' +'?workout_id=' + this.state.workout_id)
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
    if(this.props.history.location.state.nodata == true){
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
    leave ? this.props.history.push({ pathname: '/dashboard'}) :  this.generateTable()


  }

//
//   isChecked(index){
//   return this.state.checked[index]
//   }
//
//   handleCheck(n, index){
// console.log(this.props.location.query.__firebase_request_key);
//     let {checked, ttoF} = this.state
//     if (checked[index] === true){
//       checked[index] = false
//     } else checked[index] = true
//     console.log(checked);
//     ttoF == false ? ttoF = true : ttoF = false
//     this.setState({checked: checked, ttoF: ttoF})
//  };




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
  let {userID, leave, setNum, reps, weight, savedSet, movement, checked, workout, workout_id} = this.state
  let fullSet = []
  // savedSet.push(weight)
  setNum = setNum + 1
  let blankreps = new Array(workout.length).fill('')
  let blankweight = new Array(workout.length).fill('')
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



generateTable(){
  let chart = this.state.workout.map((n, index) => {
    return (

      <TableRow key={n.id}>
        <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
          {index+1}
        </TableCell>
        <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
          {n.movement_name}
        </TableCell>
        <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.rec_duration}</TableCell>
        {console.log("IN generate table: reps, weight")}
        {console.log(this.state.reps[index])}
        {console.log(this.state.weight[index])}
        <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.weight[index]} placeholder='lbs' type='number' style={{width: '45px'}} onChange={this.handleWeight.bind(this)}/></TableCell>
        <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.reps[index]} onChange={this.handleReps.bind(this)} placeholder='0' type='number' style={{width: '30px'}} /></TableCell>
        <TableCell numeric style={{padding: '0px',width: '20px', textAlign: 'center'}}>
           {/* <Checkbox name="checked" checked={this.state.checked[index]} onChange={this.handleCheck.bind(this,n,index)} color="primary"/> */}
       </TableCell>
      </TableRow>
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



//     // let {workout} = this.state
//     // {console.log("THis.state,workout:")}
//     //   {console.log(workout[0
//     {console.log("this.state.workout")}
// {console.log(this.state.workout)}
// console.log(this.props.history.location.state.nodata);
console.log(this.state.open)

    return(

        <div className="logworkout">
          <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={this.state.open}
              onClose={this.handleClose.bind(this)}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Do a workout first!</span>}
            />

       <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper1" style={{marginTop: '10px', width: '90vw', maxWidth: '1000px', backgroundImage: 'url("http://localhost:3001/assets/images/bannerworkout.jpeg")', backgroundColor:'rgba(1, 1, 1, 0.2)'}}>
        <h3 style={{textAlign: 'center'}} ><h1 style={{marginBottom: '5px', marginTop: '0px', color: 'white', font: 'primary', fontVariant: 'small-caps' }}> {this.state.workout_name}</h1> {this.state.workout_date}</h3>
      </Paper></div><br/>

        <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper" style={{marginTop: '0px',  borderRadius: '6px',  width: '20vw', maxWidth: '1000px', backgroundColor:'rgba(1, 1, 1, 0.2)'}}>
        <h3 style={{textAlign: 'center', color: 'black', fontSize: '20px'}} >Set {this.state.setNum}</h3>
      </Paper></div>
      <br/>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper className="paper" style={{marginTop: '0px', width: '800px', maxWidth: '1000px'}}>
             <Table className="log-table">

               <TableHead>
                 <TableRow>
                   <TableCell style={{padding: '8px',width: '5px', textAlign: 'center'}}>#</TableCell>
                   <TableCell style={{padding: '8px',width: '50px', textAlign: 'center'}}>Movement</TableCell>
                   <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}} >Time/Reps</TableCell>
                   <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Weight</TableCell>
                   <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Reps</TableCell>

                 </TableRow>
               </TableHead>
               <TableBody>
                 {this.generateTable()}

             <TableRow >
               <TableCell colspan='6'>
                 <div  style={{textAlign: 'right'}}>


<Button variant="contained" type='submit' color="primary" onClick={this.randomWorkout.bind(this)}>
   Random Workout
</Button> <nbws/>
                  <Button variant="contained" type='submit' color="primary" onClick={this.nextSet.bind(this)}>
                     Next Set
                  </Button> <nbsp/>
                  <Button variant="contained" color="primary" onClick={this.generateHistory.bind(this)}>
                         Save and Quit
                  </Button>
                </div>
              </TableCell>


             </TableRow>
           </TableBody>
         </Table>
       </Paper>
   </div>


      </div>
    )
  }

}

export default withRouter(withAuth(LogWorkout))
