import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import {BarChart, PieChart, Legend} from 'react-easy-chart';
import "./BizHome.css";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// const cellEditProp = {
//   mode: 'click'
// };

class BizHome extends Component {
  state = {
    bizName: "Business Name",
    monthgraph: "Monthly Accidents",
    categorygraph: "Accidents by Category",
    accidentlist: "Accident Report List",
    incidents: [],
    incidentsByCategory: [
      {key: 'Overexertion', value: 100, color: 'black'},
      {key: 'Trips/Falls', value: 200},
      {key: 'Other Exertions', value: 10},
      {key: 'Repetitive Motions', value: 5},
      {key: 'Equipment/Object Causing', value: 42},
      {key: 'Assault/Violent Act', value: 10, color: 'black'},
    ],
    incidentBarChart: [
      {
        x: 'January',
        y: 46
      },{
        x: 'February',
        y: 26
      },{
        x: 'March',
        y: 10
      },{
        x: 'April',
        y: 5
      },{
        x: 'May',
        y: 50
      },{
        x: 'June',
        y: 12
      },{
        x: 'July',
        y: 32
      },{
        x: 'August',
        y: 20
      },{
        x: 'September',
        y: 20
      },{
        x: 'October',
        y: 12
      },{
        x: 'November',
        y: 40
      },{
        x: 'December',
        y: 40
      }
    ]
  };

  
  // When this component mounts, grab the list of incidents for this business
  componentDidMount() {
    this.loadIncidents();
    this.loadIncidentsByCategory();
    this.loadIncidentsByMonth();
    this.loadUserName();
  };

  loadIncidents = () => {
    API.getIncidents()
      .then(res =>
        this.setState({ incidents: res.data })
      )
      .catch(err => console.log(err));
  };

  loadIncidentsByCategory = () => {
    API.getIncidentByCategory()
      .then(res =>
        this.setState({ incidentsByCategory: res.data })
      )
      .catch(err => console.log(err));    
  };

  loadIncidentsByMonth = () => {
    API.getIncidentByMonth()
      .then(res => 
        this.setState({ incidentBarChart: res.data})
      )
      .catch(err => console.log(err));
  };

  loadUserName = () => {
    if (Auth.getUser()) {
      this.setState({ bizName: Auth.getUser().bizName });
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <p id="name">
                {this.state.bizName}
              </p>
              <div className="text-center">
              <a href="/add" className="btn btn-info" style={{float: "center"}}>
                Add New Report
              </a>   
              </div>
          </Col>
        </Row>
        <Row>
        <Col size="md-1">
          </Col>
          <div className="graphs">
          <Col size="md-5">
          <p id="chartinfo">{this.state.categorygraph}</p>
            <PieChart
              innerHoleSize={175}
              data={this.state.incidentsByCategory}
            />
          </Col>
          <Col size="md-4">
            <p id="barinfo">{this.state.monthgraph}</p>
            <BarChart
              axisLabels={{x: 'Month', y: 'Amount'}}
              axes
              grid
              colorBars
              height={250}
              width={650}
              data={this.state.incidentBarChart}
            />
          </Col>
          <Col size="md-2">
          </Col>
          </div>
        </Row>    
        <Row>
        <Col size="md-1">
          </Col>
          <Col size="md-5">
            <div id="legend">
              <Legend data={this.state.incidentsByCategory} dataId={'key'} horizontal />         
            </div>
          </Col>
        </Row>
        <Row>
          <p id="chartinfo">{this.state.accidentlist}</p>
        </Row>
        <Row>
          <Col size="md-2">
          </Col>
          <Col size="md-8">
        <BootstrapTable id="table" ref='table' data={ this.state.incidents } multiColumnSort={ 2 }>
            <TableHeaderColumn dataField='date' dataSort={ true }>Date</TableHeaderColumn>
            <TableHeaderColumn dataField='person' dataSort={ true }>Person(s)</TableHeaderColumn>
            <TableHeaderColumn dataField='location' dataSort={ true }>Location</TableHeaderColumn>
            <TableHeaderColumn dataField='cost' dataSort={ true }>Costs</TableHeaderColumn>
            <TableHeaderColumn dataField='category' isKey dataSort={ true }>Category</TableHeaderColumn>
            <TableHeaderColumn dataField='notes' dataSort={ true }>Notes</TableHeaderColumn>
        </BootstrapTable>
        </Col>
        <Col size="md-2">
        </Col>
      </Row>
      <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
      </Container>

    );
  }
}

export default BizHome;
