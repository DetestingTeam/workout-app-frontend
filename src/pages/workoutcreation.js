import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Paper, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
// import TableCell from '@material-ui/core/TableCell';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import MapCard from '../components/MapCard'


//import { Dropdown } from 'semantic-ui-react'

// import { stateOptions } from '../common'
//const BASE = process.env.REACT_APP_API_URL

const BASE = 'http://localhost:3000'

class WorkoutCreation extends Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: [],
      values: [],
      reps: [],
      weight: [],
    }
  }

// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

componentWillMount() {
  return fetch(BASE + '/movements')
    .then((resp) => {
      return resp.json()
    })
    .then(workoutinfo => {
      console.log(workoutinfo)
      this.setState({ workouts: workoutinfo})

    })
}

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */


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

handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return this.state.workouts.map((n, workouts) => (
      <MenuItem
        key={n.id}
        insetChildren={true}
        checked={values && values.indexOf(n.movement_name) > -1}
        value={n.movement_name}
        primaryText={n.movement_name}
      />
    ));
  }

  generateTable(){
    let chart = this.state.values.map((n, index) => {
      return (

        <TableRow key={n.id}>
          <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
            {index+1}
          </TableCell>
          <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
            {n}
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



render(){
    console.log(this.state.values)
  //const {values} = this.state;
   return (
     <div>
<div>
       <Paper className = 'datapaper1'>
         <Table sortable className='workoutcreation'>
      <MuiThemeProvider>
        <SelectField multiple={true} hintText="Select a name" value={this.state.values} onChange={this.handleChange}>
       {this.menuItems(this.state.values)}
     </SelectField>
   </MuiThemeProvider>
    </Table>
  </Paper>
</div>

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

     </TableRow>
   </TableBody>
 </Table>
</Paper>
</div>
</div>



   )


 }

// const WorkoutCreation = () => (
//   <Dropdown placeholder='Workouts' fluid multiple search selection options={this.state.workouts} />
// )
}

export default withRouter(WorkoutCreation)
