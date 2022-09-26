import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../../Media/tripleCone.png";
import ListGroup from "react-bootstrap/ListGroup";
// import ChocolateRemove from "../Flavors/RemoveFlavors/ChocolateRemove";
import Button from "react-bootstrap/Button";
// import ToggleButton from "react-bootstrap/ToggleButton";
//import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Neapolitan from "../Flavors/AddFlavors/Neapolitan";
<<<<<<< Updated upstream
import Chocolate from "../Flavors/AddFlavors/Chocolate";
import Vanilla from "../Flavors/AddFlavors/Vanilla";
import Strawberry from "../Flavors/AddFlavors/Strawberry";
import SaltedCaramel from "../Flavors/AddFlavors/SaltedCaramel";
import TigerTail from "../Flavors/AddFlavors/TigerTail";
import SunnyRays from "../Flavors/AddFlavors/SunnyRays";
import Rainbow from "../Flavors/AddFlavors/RainbowAdd";
import Pupcone from "../Flavors/AddFlavors/Pupcone";
=======
>>>>>>> Stashed changes

function Build() {
  const submitOrder = () => {
    const scoop1 = document.getElementById("scoop1").value;
    const scoop2 = document.getElementById("scoop2").value;
    const scoop3 = document.getElementById("scoop3").value;
    const noScoop = "None";
    var scoops = 0;
      if (scoop2===noScoop&&scoop3===noScoop){
          scoops = 1;
      }
      if (scoop3===noScoop&&!scoop2===noScoop){
        scoops = 2;
      }else{
        scoops = 3;
      }
console.log(scoops,scoop1, scoop2, scoop3)
    }
    
    
  
  // const [scoops, setScoops] = useState([]);
  // const updateFlavors = (event, name) => {
  //   let newFlavors = JSON.parse(JSON.stringify(flavors));
  //   newFlavors[name] = event;
  //   setFlavors(newFlavors);
  //   localStorage.setItem("flavours", JSON.stringify(newFlavors));
  // };

  // const orderSubmit = (event) => {
  //   post new order with cones, scoops and their flavors
  // }
  
  // const addCone = (event) => {
  //   for loop a limit to 4 cones
  //   clear page and save previous cone to localstorage
  // }

    // const clearSelect = (event) => {
    //   new order, clear all selection
    // }
  return (
    <>
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
              {/** ADDED CARD MANUALLY DONT TOUCH THIS ONE ^^^^ **/}
<<<<<<< Updated upstream
              <>
              <Chocolate/>
              <Vanilla/>
              <Strawberry/>
              <Neapolitan/>
              <SaltedCaramel/>
              <TigerTail/>
              <SunnyRays/>
              <Rainbow/>
              <Pupcone/>
              </>              
=======
              <Neapolitan/>
              <Neapolitan/>
              <Neapolitan/>
          
              <>
                {/** ADDED CARD MANUALLY DONT TOUCH THIS ONE **/}
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Body>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>Enjoy our milky Chocolate Flavor</Card.Text>
                    {/* <ToggleButton
                      className="mb-2"
                      id="toggle-check"
                      type="checkbox"
                      checked={flavors["cho"]}
                      value="cho"
                      name="cho"
                      variant="primary"
                      onChange={(event) =>
                        updateFlavors(event.currentTarget.checked, "cho")
                      }
                    >
                      Add Scoop
                    </ToggleButton> */}
                  </Card.Body>
                </Card>
              </>
              <>
                {/** ADDED CARD MANUALLY DONT TOUCH THIS ONE **/}
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Body>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>Enjoy our milky Chocolate Flavor</Card.Text>
                    {/* <ToggleButton
                      className="mb-2"
                      id="toggle-check"
                      type="checkbox"
                      checked={flavors["cho"]}
                      value="cho"
                      name="cho"
                      variant="primary"
                      onChange={(event) =>
                        updateFlavors(event.currentTarget.checked, "cho")
                      }
                    >
                      Add Scoop
                    </ToggleButton> */}
                  </Card.Body>
                </Card>
              </>
              <>
                {/** ADDED CARD MANUALLY DONT TOUCH THIS ONE **/}
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Body>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>Enjoy our milky Chocolate Flavor</Card.Text>
                    {/* <ToggleButton
                      className="mb-2"
                      id="toggle-check"
                      type="checkbox"
                      checked={flavors["cho"]}
                      value="cho"
                      name="cho"
                      variant="primary"
                      onChange={(event) =>
                        updateFlavors(event.currentTarget.checked, "cho")
                      }
                    >
                      Add Scoop
                    </ToggleButton> */}
                  </Card.Body>
                </Card>
              </>
              {/* <ChocolateAdd />
              <ChocolateAdd /> */}
>>>>>>> Stashed changes
            </ListGroup>
          </Col>
          <Col xs={5}>
            <img src={Image} alt="ice cream cone temp" />
          </Col>
          <Col>
            <ListGroup>
            <InputGroup  className="mb-3">
        <InputGroup.Text id="basic-addon1">First Scoop</InputGroup.Text>
        <Form.Select id="scoop1" aria-label="Default select example">
      <option>Choose Flavor</option>
      <option  value="Chocolate">Chocolate</option>
      <option value="Vanilla">Vanilla</option>
      <option value="Strawberry">Strawberry</option>
    </Form.Select>
      </InputGroup>
      <InputGroup  className="mb-3">
        <InputGroup.Text id="basic-addon1">Second Scoop</InputGroup.Text>
        <Form.Select id="scoop2" aria-label="Default select example">
      <option>None</option>
      <option value="Chocolate">Chocolate</option>
      <option value="Vanilla">Vanilla</option>
      <option value="Strawberry">Strawberry</option>
    </Form.Select>
      </InputGroup>
      <InputGroup  className="mb-3">
        <InputGroup.Text id="basic-addon1">Third Scoop</InputGroup.Text>
        <Form.Select id="scoop3" aria-label="Default select example">
      <option>None</option>
      <option value="Chocolate">Chocolate</option>
      <option value="Vanilla">Vanilla</option>
      <option value="Strawberry">Strawberry</option>
    </Form.Select>
      </InputGroup>
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
            <Button variant="success" size="lg" onClick={submitOrder}>
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
