import React, {useState} from "react";
import Header from "../components/Header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../Media/tripleCone.png";
import ChocolateAdd from "../components/Flavors/AddFlavors/ChocolateAdd.js";
import ListGroup from "react-bootstrap/ListGroup";
import ChocolateRemove from "../components/Flavors/RemoveFlavors/ChocolateRemove";
import Button from 'react-bootstrap/Button';


function Build() {
  // const [cones, setCones] = useState({
  //   scoops: "",
  //   scoop1: "",
  //   scoop2: "",
  //   scoop3: "",
  // })

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <h2>
              <br />
              Build a Cone!
            </h2>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <p>
              Choose from the wide array of flavors on the left and check on
              your right to make sure it's exactly what you want!
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <p>
              Once selection is complete, please choose another cone or submit
              order to continue.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <ListGroup>
              <ChocolateAdd />
              <ChocolateAdd />
              <ChocolateAdd />
            </ListGroup>
          </Col>
          <Col xs={5}>
            <img src={Image} alt="ice cream cone temp" />
          </Col>
          <Col>
            <ListGroup>
              <ChocolateRemove />
            </ListGroup>
          </Col>
        </Row>
        <Row>
        <Col xs><Button variant="primary" size="lg">
          Add Another Cone
        </Button></Col>
        <Col xs={{ order: 12 }}><Button variant="success" size="lg">
          Submit Order
        </Button></Col>
        <Col xs={{ order: 1 }}><Button variant="secondary" size="lg">
          Clear Cone
        </Button></Col>
      </Row>
      <Row>
        <br/>
      </Row>
      </Container>
    </>
  );
}

export default Build;
