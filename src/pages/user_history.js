import React, { Component } from 'react';

import './user_history.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Paper, FormControl, Button, Checkbox, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import AuthService from '../components/AuthService'
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom'


// ReactChartkick.addAdapter(Chart)
const Auth = new AuthService()
const BASE = 'http://localhost:3000'

class UserHistory extends Component {
  constructor(props) {
    super(props)
    this.state={
      userHistory: [],
      chartdata: {},
      reps: [],
      xvals: [],
      yvals: [],
      movement: '',
      uniquemoves: [],
      filteredData: [],
      selectedMove: '',
      selectedProperty: '',

        }
      }
  componentWillMount() {
    let userID = Auth.getUserId()
    return fetch(BASE + '/user_histories' +'?id=' + userID)
      .then((resp) => {
        return resp.json()
      })
      .then(APIinfo => {
        this.setState({
          userHistory: APIinfo
          })
          this.filterMoves()
      })
  }

  filterMoves(){
    const unique = [...new Set(this.state.userHistory.map(element=> element.movement_name))];
    this.setState({uniquemoves: unique});
  }

  selectMove = event => {
  // Filter out selected movements data:
    let arrByID = this.state.userHistory.filter(item => { return item.movement_name === event.target.value ? true : false })
          console.log(arrByID);
      this.setState({ [event.target.name]: event.target.value, selectedMove: event.target.value, filteredData: arrByID})
   };

selectProperty = event => {
  this.setState({ [event.target.name]: event.target.value, selectedProperty: event.target.value })
}


generateChartData(){
  let chartdata = {}

  this.state.userHistory.forEach((element, index)=>
{

  let selectedProp = this.state.selectedProperty
    let num = index
  if(element.movement_name === this.state.selectedMove && selectedProp === "reps"){
    console.log("THIS RUNNING");
    //make some fake ranged dates:
    //make some fake ranged dates:
    if(num<30){
    num = element.workout_date.slice(0,8) + num
  } else{ num = index - 30
    num = element.workout_date.slice(0,8) + num}
    //   // USE THIS FOR REAL:
    // index = element.workout_date
    // TODO: fix: this only allows for one data point per date:
    chartdata[num] = (element.rep)
}
if(element.movement_name === this.state.selectedMove && selectedProp === "weight"){
//make some fake ranged dates:
if(num<30){
num = element.workout_date.slice(0,8) + num
} else{ num = 1
num = element.workout_date.slice(0,8) + num}
  // USE THIS FOR REAL:
  // index = element.workout_date
      // TODO: fix: this only allows for one data point per date:
  chartdata[num] = (element.weight)
}
}
)
this.setState({chartdata: chartdata})
}
  render(){

  return(
    <div>
      <br/>
      <div className='sidegraph'>
          <Paper className = 'datapaper'>
            <h2>Your Stats</h2>
            <h4> {this.state.selectedMove}</h4>
              {console.log(this.state.chartData)}
              {/* {console.log(this.state.uniquemoves)} */}
            <form className="root">
                <FormControl className="dropdown">
                    <Select
                       value={this.state.movement_name}
                       onChange={this.selectMove}
                       input={<Input name="movement_name" id="movement_id" />}
                     >
                       <MenuItem value="">
                         <em>Select Movement:</em>
                       </MenuItem>
                       {this.state.uniquemoves.map((element)=>{
                         return(
                        <MenuItem value={element}> {element}</MenuItem>
                       )
                     })}
                   </Select>
                   <FormHelperText>Movement</FormHelperText>
              </FormControl>
              <FormControl> <div id="blankspace"></div>   </FormControl>

              <FormControl className="dropdown">
              <Select
                value={this.state.age}
                onChange={this.selectProperty}
                displayEmpty
                name="age"
                className=""
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value={"reps"}>Reps</MenuItem>
                <MenuItem value={"weight"}>Weight</MenuItem>
              </Select>
              <FormHelperText>Property</FormHelperText>
              </FormControl>
              <FormControl><div id="blankspace"></div> </FormControl>
              <Button className="mybutton" size="small" variant="contained" color="primary" onClick={this.generateChartData.bind(this)}>
                  Plot!
              </Button>
            </form>

            <div id="chartbox">
              <LineChart id="chart" width="400px" height="200px" data={ this.state.chartdata }   />
            </div>
          </Paper>
      </div>
    <br/>
          <div className='sidegraph'><Paper className = 'datapaper'>
<h2>{this.state.selectedMove} Table </h2>
<Table sortable className="log-table">

  <TableHead>
    <TableRow>
      <TableCell style={{padding: '8px',width: '5px', textAlign: 'center'}}>Date</TableCell>
      <TableCell style={{padding: '8px',width: '50px', textAlign: 'center'}}>Movement</TableCell>
      <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}} >Weight</TableCell>
      <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Max Reps</TableCell>
      <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>On Set</TableCell>

    </TableRow>
  </TableHead>
  <TableBody>
    {this.state.filteredData.map((n, index) => {
      return (

        <TableRow key={n.id}>
          <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
            {n.workout_date.slice(0,8) + index}
          </TableCell>
          <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
            {n.movement_name}
          </TableCell>
          <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.weight}</TableCell>
          <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>{n.rep}</TableCell>
          <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>{n.set}</TableCell>

        </TableRow>
      );
    })}


</TableBody>
</Table>
</Paper>

</div>
<br/>
        <div className="table">


          <Table sortable className="log-table">

            <TableHead>
              <TableRow>
                <TableCell style={{padding: '8px',width: '5px', textAlign: 'center'}}>Date</TableCell>
                <TableCell style={{padding: '8px',width: '50px', textAlign: 'center'}}>Movement</TableCell>
                <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}} >Weight</TableCell>
                <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>Max Reps</TableCell>
                <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>On Set</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.userHistory.map((n, index) => {
                return (

                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
                      {n.workout_date.slice(0,8) + index}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
                      {n.movement_name}
                    </TableCell>
                    <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.weight}</TableCell>
                    <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>{n.rep}</TableCell>
                    <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}>{n.set}</TableCell>

                  </TableRow>
                );
              })}


          </TableBody>
          </Table>






















          {/* <Table
            sortable
            shadow={5}
            rows={  this.state.myRows }
          >
            <TableHead  numeric  name="date"  tooltip="Sort by Date"> Date </TableHead>
            <TableHead
              name="movement"
              numeric
              tooltip="Start a Movement"
            >
             Movement Name
           </TableHead>
            <TableHead
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="weight"
              tooltip="Get Beefy"
            >Weight</TableHead>
            <TableHead
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="reps"
              tooltip="Steady Reppin'"
            >Max Reps</TableHead>
            <TableHead
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="sets"
              tooltip="Sets"
            >Set Number</TableHead>

          </Table> */}



    </div>
  </div>
    )
  }
}


export default withRouter(withAuth(UserHistory))
