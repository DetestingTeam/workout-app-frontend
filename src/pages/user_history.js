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

// ReactChartkick.addAdapter(Chart)

const BASE = 'http://localhost:3000'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class UserHistory extends Component {
  constructor(props) {
    super(props)
    this.state={
      chartdata: {},
      reps: [],
      xvals: [],
      yvals: [],
      movement: '',
      uniquemoves: [],
      myRows: [],
      selectedMove: '',
      selectedProperty: '',
      history: [
        {
          "id": 1,
          "user_id": 1,
          "created_at": "2018-04-20T20:53:38.103Z",
          "workout": [
            {
              id: 1,
              name: "Booty Blaster",
              difficulty: "moderate",
              duration: "1 hour",
              "movement":[
                {
                  id: 1,
                  "name": "Pull-Up",
                  bodypart: "back",
                  url: "http://www.google.com",
                  description: "pull yourself up",
                  //JOIN:
                  "reps": 8,
                  "weight": "N/A",
                  "sets": 2,
                  "date": "4/01/2018"
                },  {
                    id: 2,
                    "name": "Kettle Bell Swings",
                    bodypart: "Full Body",
                    url: "http://www.google.com",
                    description: "Swing that shit",
                    //JOIN:
                    "reps": 10,
                    "weight": 25,
                    "sets": 1,
                    "date": "4/02/2018"
                  },
                  {
                      id: 2,
                      "name": "Kettle Bell Swings",
                      bodypart: "Full Body",
                      url: "http://www.google.com",
                      description: "Swing that shit",
                      //JOIN:
                      "reps": 10,
                      "weight": 30,
                      "sets": 2,
                      "date": "4/06/2018"
                    },{
                        id: 2,
                        "name": "Kettle Bell Swings",
                        bodypart: "Full Body",
                        url: "http://www.google.com",
                        description: "Swing that shit",
                        //JOIN:
                        "reps": 10,
                        "weight": 35,
                        "sets": 3,
                        "date": "4/08/2018"
                      }],

              }]
        } ,
            {
              "id": 2,
              "user_id": 1,
              created_at: "2018-04-22T20:53:38.103Z",
              "workout": [
                {
                  id: 2,
                  name: "Booty Blaster",
                  difficulty: "moderate",
                  duration: "1 hour",
                  "movement":[
                    {
                      id: 2,
                      "name": "Push-Up",
                      bodypart: "chest",
                      url: "http://www.ebay.com",
                      description: "push yourself up",
                      //JOIN:
                      "reps": 30,
                      "weight": "N/A",
                      "sets": 5,
                      "date": "4/20/2018"
                    },
                    {
                      id: 1,
                      "name": "Pull-Up",
                      bodypart: "back",
                      url: "http://www.google.com",
                      description: "pull yourself up",
                      //JOIN:
                      "reps": 15,
                      "weight": "N/A",
                      "sets": 2,
                      "date": "4/22/2018"
                    },
                    {
                        id: 2,
                        "name": "Kettle Bell Swings",
                        bodypart: "Full Body",
                        url: "http://www.google.com",
                        description: "Swing that shit",
                        //JOIN:
                        "reps": 10,
                        "weight": 35,
                        "sets": 3,
                        "date": "4/12/2018"
                      }]

                }
              ]
            }
          ]
        }
      }
  componentWillMount() {
    this.getMoves()
    this.filterMoves()

    // return fetch(BASE + '/user_histories' +'?id=1')
    //   .then((resp) => {
    //     return resp.json()
    //   })
    //   .then(APIinfo => {
    //     this.setState({
    //       history: APIinfo
    //       })
    //     console.log(this.state.history);
    //   })
  }



  getMoves(){
    let newRows = this.state.myRows
    this.state.history.forEach((element, index) =>{
               element.workout.forEach((e,i)=> {
                 e.movement.forEach((ele,ind)=> {
                        newRows.push(
                         {movement: ele.name, weight: ele.weight, date: ele.date, reps: ele.reps, sets: ele.sets}
                        )
                    })
             })
      })
      this.setState({myRows: newRows})
  }


  filterMoves(){
    const unique = [...new Set(this.state.myRows.map(element=> element.movement))];
    this.setState({uniquemoves: unique});
  }

  selectMove = event => {
    this.setState({ [event.target.name]: event.target.value, selectedMove: event.target.value})
   };

selectProperty = event => {
  this.setState({ [event.target.name]: event.target.value, selectedProperty: event.target.value })
}
  // selectProperty(event){
  //     this.setState({ [event.target.name]: event.target.value, selectedProperty: event.target.value })
  //    console.log(this.state.selectedProperty);
  //   };

generateChartData(){
  let xvals = []
  let yvals = []
  let chartdata = {}
  this.state.myRows.forEach((element, index)=>
{

  let selectedProp = this.state.selectedProperty
  console.log("selected Prop:")
  console.log(selectedProp)
  if(element.movement === this.state.selectedMove && selectedProp === "reps"){
    xvals.push(element.date)
    yvals.push(element.reps)
    index = element.date
    chartdata[index] = (element.reps)
}
if(element.movement === this.state.selectedMove && selectedProp === "weight"){
  xvals.push(element.date)
  yvals.push(element.weight)
  index = element.date
  chartdata[index] = (element.weight)
}
}
)
this.setState({ xvals: xvals, yvals: yvals, chartdata: chartdata})
}


  render(){
  return(
    <div>
      <h2>Your Stats</h2>
    <h4> {this.state.selectedMove}</h4>
{console.log(this.state.chartData)}
{/* {console.log(this.state.uniquemoves)} */}
      <form className="root">
       <FormControl className="dropdown">
         <Select
           value={this.state.movement}
           onChange={this.selectMove}
           input={<Input name="movement" id="movement_id" />}
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
<Button variant="contained" color="primary" onClick={this.generateChartData.bind(this)}>
       Go!
     </Button>

  {/* this.generateChartData() */}








</form>


{/* {let dataArr = this.state.xvals.map((element)=>{
  rr
} )  } */}
<div id="chartbox">
  <LineChart id="chart" width="400px" height="200px" data={ this.state.chartdata }   />
</div>
<br/>
        <div className="table">

{console.log("myRows:")}
{console.log(this.state.myRows)}

          <Table className="log-table">

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
              {this.state.myRows.map((n, index) => {
                return (

                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row" style={{padding: '8px', width: '5px', textAlign: 'center'}}>
                      {n.date}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{padding: '8px', width: '50px', textAlign: 'center'}}>
                      {n.movement}
                    </TableCell>
                    <TableCell numeric style={{width: '50px',  padding: '8px', textAlign: 'center'}}>{n.weight}</TableCell>

                    <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}></TableCell>
                    <TableCell numeric style={{width: '60px',  padding: '8px', textAlign: 'center'}}></TableCell>

                  </TableRow>
                );
              })}


          </TableBody>
          </Table>






















          <Table
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

          </Table>



    </div>
  </div>
    )
  }
}


export default withStyles(styles)(UserHistory);
