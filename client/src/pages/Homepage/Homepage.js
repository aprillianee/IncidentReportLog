import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Homepage.css';

class Homepage extends Component {
  state = {
    appName: "Accident to Action",
    risk: "Accident to Action is here to help employers evaluate the safety of a workplace by allowing users to easily track work place accidents and product related issues in order to avoid potentially dangerous and costly problems.",
    description: "An effective, easy to use tracking software offering users data visualization in order to help you quickly identify and act on emerging trends and patterns.",    
    benefitsColOne: "The biggest benefit of our environmentally friendly, easy to use online tracking software is  the amount of time and money it saves! Incidents are recorded in minutes; everything from extra copy paper, printer ink and postage can be avoided as you start logging reports electronically saving your company hundreds if not thousands of dollars annually.",
    benefitsColTwo: "Data visualization has become an indispensable feature in the success of a company. As data volume surges, visualization allows users to process large amounts of information at once. Accident to Action, manages influxes of data making it easier to discover trends and patterns affecting the safety and work environment of your valued employees.",
    benefitsColThree: "Accident to Action is here to help employers evaluate the safety of a workplace by allowing users to easily track work place accidents and product related issues in order to avoid potentially dangerous and costly problems."
  };

  render() {
    return (
      <Container fluid>
       <ReactCSSTransitionGroup
      transitionName="aboutUs"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="aboutUs">
          <Row>
              <Col size="sm-2">
              </Col>
              <Col size="sm-4">
                <img id="safetyimg" src="./123-2.png" />
              </Col>
              <Col size="sm-4">
                <p id="description" className="hp">
                    {this.state.description}
                </p>
              </Col>
              <Col size="sm-2">
              </Col>
          </Row>
        </div>
      </ReactCSSTransitionGroup>

      <div className="benefits">
        <Row>
            <CardDeck id="deck">
            <div className="row">
            <Col size="md-2">
              </Col>
              <Col size="md-8">
                <Card>
                  <CardImg class="img-responsive" id="imagesize" top  src="./imagetwo.jpg"alt="Card image cap" />
                  <CardBody id="cbody">
                    <CardTitle id="ctitle">Online Tracking</CardTitle>
                    <CardText id="ctext">{this.state.benefitsColOne}</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col size="md-2">
              </Col>
            </div>
            <div className="row">
              <Col size="md-2">
              </Col>
              <Col size="md-8">
                <Card>
                  <CardImg id="imagesize2" top src="./imageone.jpg" alt="Card image cap" />
                  <CardBody id="cbody">
                    <CardTitle id="ctitle">Analyze Trends</CardTitle>
                    <CardText id="ctext">{this.state.benefitsColTwo}</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col size="md-2">
              </Col>
            </div>
            </CardDeck>
        </Row>
      </div>
      <div className="risk">
        <Row>
          <Col size="sm-4">
          </Col>
          <Col size="sm-4">
          <img id="imgthree" src="./imagethree.jpg" />
          </Col>
          <Col size="sm-4">
          </Col>
        </Row>
        <Row>
        <Col size="sm-4">
          </Col>
          <Col size="sm-4">
            <p id="ctitle">Reduce Risk</p>
            <p id="risk" className="hp">
                {this.state.risk}
            </p>
          </Col>
          <Col size="sm-4">
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default Homepage;