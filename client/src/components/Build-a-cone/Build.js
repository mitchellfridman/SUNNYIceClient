import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../../Media/tripleCone.png";
import ChocolateAdd from "../Flavors/AddFlavors/ChocolateAdd.js";
import ListGroup from "react-bootstrap/ListGroup";
import ChocolateRemove from "../Flavors/RemoveFlavors/ChocolateRemove";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";

function Build({ flavors, setFlavors }) {
  const updateFlavors = (fname) => {
    let newFlavors = JSON.parse(JSON.stringify(flavors));
    newFlavors[fname] = !newFlavors[fname];
    setFlavors(newFlavors);
  };

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            {JSON.stringify(flavors)}
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
                <>{/** ADDED CARD MANUALLY DONT TOUCH THIS ONE **/}
            <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Chocolate</Card.Title>
          <Card.Text>Enjoy our milky Chocolate Flavor</Card.Text>
          <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="primary"
        onChange={() => updateFlavors("cho")}>
        Add Scoop
      </ToggleButton>
        </Card.Body>
      </Card>
      </>{/** ADDED CARD MANUALLY DONT TOUCH THIS ONE ^^^^ **/}
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
          <Col xs>
            <Button variant="primary" size="lg">
              Add Another Cone
            </Button>
          </Col>
          <Col xs={{ order: 12 }}>
            <Button variant="success" size="lg">
              Submit Order
            </Button>
          </Col>
          <Col xs={{ order: 1 }}>
            <Button variant="secondary" size="lg">
              Clear Cone
            </Button>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
      </Container>
    </>
  );
}

export default Build;
