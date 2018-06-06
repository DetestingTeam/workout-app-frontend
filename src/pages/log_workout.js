import React, { Component } from 'react';
import {Paper, Button, Checkbox, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
import LogHeader from '../components/log_header'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout

const Auth = new AuthService()
const BASE = 'http://localhost:3000'

class LogWorkout extends Component{
  constructor(props){
    super(props)
    this.state = {

      checked: [],
      reps: [],
      weight: [],
      workout_name: "Booty Blaster",
      name: '',
      savedSet: [],
      setNum: 1,
      movement:[
        {
          id: 1,
          "name": "Push-Up",
          bodypart: "chest",
          url: "http://www.ebay.com",
          description: "push yourself up",
          //JOIN:
          duration: "30 seconds"
        },
        {
          id: 2,
          "name": "Pull-Up",
          bodypart: "back",
          url: "http://www.google.com",
          description: "pull yourself up",
          //JOIN:
          duration: "1 minute"
        },
        {
            id: 3,
            "name": "Kettle Bell Swings",
            bodypart: "Full Body",
            url: "http://www.google.com",
            description: "Swing that shit",
            //JOIN:
            duration: "45 seconds"
          }]

    }

  }


  componentWillMount() {
    let userID = Auth.getUserId()
    console.log(userID);
    return fetch(BASE + '/user_histories' +'?id=' + userID)
      .then((resp) => {
        return resp.json()
      })
      .then(APIinfo => {
        this.setState({
          history: APIinfo
          })
        console.log(this.state.history);
      })
  }


  isChecked(index){
  return this.state.checked[index]
  }

  handleCheck(n, index){
    let checked = this.state.checked
    if (this.state.checked[index] === true){
      checked[index] = false
    } else checked[index] = true
    this.isChecked(index)
    this.setState({checked: checked})
   // this.setState({ name: event.target.checked });
 };


handleReps(event){
  let { reps } = this.state
  reps[event.target.id] = event.target.value
  console.log("Event value:");
  console.log(event.target.value);
  this.setState({reps: reps})
}

handleWeight(event){
  let weight = this.state.weight
  weight[event.target.id] = event.target.value
  console.log(weight);
  this.setState({ [event.target.name]: event.target.value, weight: weight})
}

nextSet(){
  let {setNum, reps, weight, savedSet, movement} = this.state
  savedSet.push(reps)
  savedSet.push(weight)
  setNum = setNum + 1
  console.log(setNum);
  console.log(reps);
  // movement = [
  //   {
  //     id: 1,
  //     "name": "Push-Up",
  //     bodypart: "chest",
  //     url: "http://www.ebay.com",
  //     description: "push yourself up",
  //     //JOIN:
  //     duration: "30 seconds"
  //   },
  //   {
  //     id: 2,
  //     "name": "Pull-Up",
  //     bodypart: "back",
  //     url: "http://www.google.com",
  //     description: "pull yourself up",
  //     //JOIN:
  //     duration: "1 minute"
  //   }]
  this.setState({setNum: setNum, reps: [0,0,0]})


}

saveAndQuit(){

}


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

        <div>
       <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper" style={{marginTop: '10px', width: '800px', maxWidth: '1000px'}}>
        <h3 style={{textAlign: 'left', marginLeft: '10vw',  marginBottom: '10px', marginTop: '10px', marginRight: '0px'}} ><h1 style={{marginBottom: '10px'}}>{this.state.workout_name}:   Set {this.state.setNum}</h1></h3>
      </Paper></div><br/>

        <div style={{display: 'flex', justifyContent: 'center'}}>  <Paper className="paper" style={{marginTop: '0px', width: '800px', maxWidth: '1000px'}}>
        <h3 style={{textAlign: 'left', marginLeft: '10vw',  marginBottom: '10px', marginTop: '10px', marginRight: '0px'}} >Log your workout:</h3>
      </Paper></div>
      <br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper className="paper" style={{marginTop: '0px', width: '800px', maxWidth: '1000px'}}>
             <Table className="log-table">

               <TableHead>
                 <TableRow>
                   <TableCell style={{padding: '8px',width: '5px', textAlign: 'center'}}></TableCell>
                   <TableCell style={{padding: '8px',width: '50px', textAlign: 'center'}}>Movement</TableCell>
                   <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}} >Time/Reps</TableCell>
                   <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Reps</TableCell>
                   <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Weight</TableCell>
                   <TableCell numeric style={{padding: '0px',width: '20px', textAlign: 'center'}}>Complete</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {this.state.movement.map((n, index) => {
                   return (

                     <TableRow key={n.id}>
                       <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
                         {index+1}
                       </TableCell>
                       <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
                         {n.name}
                       </TableCell>
                       <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.duration}</TableCell>

                       <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} value={this.state.reps[index]} onChange={this.handleReps.bind(this)} placeholder='0' type='number' style={{width: '30px'}} /></TableCell>
                       <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}><Input id={index} placeholder='lbs' type='number' style={{width: '45px'}} onChange={this.handleWeight.bind(this)}></Input></TableCell>
                       <TableCell numeric style={{padding: '0px',width: '20px', textAlign: 'center'}}><Checkbox
          name = "checked"
          checked={this.isChecked()}
          onChange={this.handleCheck.bind(this,n,index)}
          value="checked"
          color="primary"

        /></TableCell>
                     </TableRow>
                   );
                 })}

             <TableRow >
               <TableCell colspan='6'>
                 <div  style={{textAlign: 'right'}}>
                  <Button variant="contained" type='submit' color="primary" onClick={this.nextSet.bind(this)}>
                     Next Set
                  </Button> <nbsp/>
                  <Button variant="contained" color="primary" onClick={this.saveAndQuit.bind(this)}>
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

export default LogWorkout
