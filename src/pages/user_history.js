import React, { Component } from 'react';
import './user_history.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chart from 'chart.js'
import { LineChart } from 'react-chartkick';
import {Paper, FormControl, Button, Table, TableHead, TableCell, TableBody, TableRow, Input} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import AuthService from '../components/AuthService'
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom'


// ReactChartkick.addAdapter(Chart)
const Auth = new AuthService()
const BASE = process.env.REACT_APP_API_URL

class UserHistory extends Component {
  constructor(props) {
    super(props)
    this.state={
      userHistory: [],
      firstname: 'Default',
      lastname: 'User',
      chartdata: {},
      reps: [],
      xvals: [],
      yvals: [],
      movement: '',
      uniquemoves: [],
      filteredData: [],
      selectedMove: '',
      selectedProperty: 'reps',
      show: "show",
      fullHistoryGraph: '',
      nodata: false,
      chart: '',

        }
      }
  componentWillMount() {
    let userID = Auth.getUserId()

    return fetch(BASE + '/user_histories?id=' + userID)
      .then((resp) => {
        return resp.json()
      })
      .then(APIinfo => {
        console.log("APIinfo")
        console.log(APIinfo)
        if(APIinfo.length ==0 ){
          console.log("TEST PASSED");
          let nodata = true
          this.props.history.push({
                pathname: '/log',
                state: {nodata: nodata}
          })
          // this.props.history.push('/log', nodata.true)
        } else{
        this.setState({
          userHistory: APIinfo, firstname: APIinfo[0].first_name, lastname: APIinfo[0].last_name, selectedMove: APIinfo[0].movement_name
          })
        }
          this.filterMoves()
          this.generateChartData()
          console.log(this.state.chartdata);
          this.initialSelectChart()
          this.popSelectChart()
      })
  }

  componentDidMount(){
    this.generateChartData()
    console.log(this.state.chartdata);
  }

  filterMoves(){
    const unique = [...new Set(this.state.userHistory.map(element=> element.movement_name))];
    this.setState({uniquemoves: unique});
  }


initialSelectChart(){
  let arrByID = this.state.userHistory.filter(item => { return item.movement_name === this.state.selectedMove? true : false })
    this.setState({filteredData: arrByID})
}

  selectMove = event => {
  // Filter out selected movements data:
    let arrByID = this.state.userHistory.filter(item => { return item.movement_name === event.target.value ? true : false })
      this.setState({ [event.target.name]: event.target.value, selectedMove: event.target.value, filteredData: arrByID}, this.popSelectChart)
   };

selectProperty = event => {
  this.setState({ [event.target.name]: event.target.value, selectedProperty: event.target.value })
}

popSelectChart(){
  this.setState({selectChart:
      <div className='sidegraph'>
        <Paper className = 'datapaper'>
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
    })
}

generateChartData(){
  let chartdata = {}

  this.state.userHistory.forEach((element, index)=>
{

  let selectedProp = this.state.selectedProperty
    let num = index
  if(element.movement_name === this.state.selectedMove && selectedProp === "reps"){

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



showFullHistory(){
  let fullHistoryGraph
  let {show} = this.state
if(this.state.show === "show"){
  show = "hide"
fullHistoryGraph = <div className="table">
  <Paper className = 'datapaper'>
    <h2>Full History</h2>
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
</Paper>
</div>
} else show = "show"

this.setState({fullHistoryGraph: fullHistoryGraph, show: show})

}


  render(){

  return(
    <div>

      <br/>
      <div className='sidegraph'>
          <Paper className = 'datapaper'>
            <h2>Progress for {this.state.firstname} {this.state.lastname} </h2>
            <h4> Movement: {this.state.selectedMove}</h4>
              {/* {console.log(this.state.chartData)} */}
              {/* {console.log(this.state.uniquemoves)} */}
            <form className="root">
                <FormControl className="dropdown">
                    <Select
                       value={this.state.selectedMove}
                       onChange={this.selectMove}
                       input={<Input name="movement_name" id="movement_id" />}
                     >
                       {/* <MenuItem value={this.state.movement_name}> */}
                         {/* <em>Select Movement:</em> */}
                       {/* </MenuItem> */}
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
                value={this.state.selectedProperty}
                onChange={this.selectProperty}
                displayEmpty
                name="property"
                className=""
              >
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

{this.state.selectChart}



<br/>
<div className="showbutton">
  <div className="topgraphbar" onClick={this.showFullHistory.bind(this)}>
{/* <Button  size="small" variant="contained" color="primary" onClick={this.showFullHistory.bind(this)}>

</Button> */}
{this.state.show} all <br/>
=
</div></div>

{this.state.fullHistoryGraph}




  </div>
    )
  }
}


export default withRouter(withAuth(UserHistory))
