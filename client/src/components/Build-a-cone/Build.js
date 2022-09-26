import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../../Media/tripleCone.png";
import ListGroup from "react-bootstrap/ListGroup";
// import ChocolateRemove from "../Flavors/RemoveFlavors/ChocolateRemove";
import Button from "react-bootstrap/Button";
// import ToggleButton from "react-bootstrap/ToggleButton";
//import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Neapolitan from "../Flavors/AddFlavors/Neapolitan";
import Chocolate from "../Flavors/AddFlavors/Chocolate";
import Vanilla from "../Flavors/AddFlavors/Vanilla";
import Strawberry from "../Flavors/AddFlavors/Strawberry";
import SaltedCaramel from "../Flavors/AddFlavors/SaltedCaramel";
import TigerTail from "../Flavors/AddFlavors/TigerTail";
import SunnyRays from "../Flavors/AddFlavors/SunnyRays";
import Rainbow from "../Flavors/AddFlavors/RainbowAdd";
import Pupcone from "../Flavors/AddFlavors/Pupcone";
import axios from "axios";

function Build() {
  const scoop1 = document.getElementById("scoop1");
  const scoop2 = document.getElementById("scoop2");
  const scoop3 = document.getElementById("scoop3");

  const [listOfFlavors, setlistOfFlavors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/flavours/getAll").then((response) =>{
      setlistOfFlavors(response.data);
    });
  }, []);


  const setScoop1 = () => {
    console.log(scoop1.value);
  };
  const setScoop2 = () => {
    console.log(scoop2.value);
  };

  const setScoop3 = () => {
    console.log(scoop3.value);
  };
  const addAnother = () => {
    console.log();
    document.getElementById("scoop1").value = "Choose Flavor";
    document.getElementById("scoop2").value = "None";
    document.getElementById("scoop3").value = "None";
  };
  const submitOrder = () => {
    const data = {
      scoop1: scoop1.value,
      scoop2: scoop2.value,
      scoop3: scoop3.value,
    }
    axios.post("http://localhost:3001/Cones/newCone", data).then(() => {
      console.log(data)
    });
    
    setScoop1();
    setScoop2();
    setScoop3();

  };

  const clearCone = () => {
    document.getElementById("scoop1").value = "Choose Flavor";
    document.getElementById("scoop2").value = "None";
    document.getElementById("scoop3").value = "None";
  };

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
              <>
                <Chocolate />
                <Vanilla />
                <Strawberry />
                <Neapolitan />
                <SaltedCaramel />
                <TigerTail />
                <SunnyRays />
                <Rainbow />
                <Pupcone />
              </>
            </ListGroup>
          </Col>
          <Col xs={5}>
            <img src={Image} alt="ice cream cone temp" />
          </Col>
          <Col>
            <Form>
              <ListGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    First Scoop
                  </InputGroup.Text>
                  <Form.Select id="scoop1" aria-label="Default select example">
                    <option value="">Choose Flavor</option>
                    {listOfFlavors.map((flavors)=>{
                      
                        return(
                          <option key={flavors.flavourId} value={flavors.flavourId}>{flavors.flavourName}</option>
                        )
                        
                      
                    })}
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Second Scoop
                  </InputGroup.Text>
                  <Form.Select id="scoop2" aria-label="Default select example">
                  <option value="">Choose Flavor</option>
                    {listOfFlavors.map((flavors)=>{
                      
                        return(
                          <option key={flavors.flavourId} value={flavors.flavourId}>{flavors.flavourName}</option>
                        )
                        
                      
                    })}
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Third Scoop
                  </InputGroup.Text>
                  <Form.Select id="scoop3" aria-label="Default select example">
                    <option value="">Choose Flavor</option>
                    {listOfFlavors.map((flavors)=>{
                      
                        return(
                          <option key={flavors.flavourId} value={flavors.flavourId}>{flavors.flavourName}</option>
                        )
                        
                      
                    })}
                  </Form.Select>
                </InputGroup>
              </ListGroup>
              <div className="pt-4">
                <Button variant="primary" size="lg" onClick={addAnother}>
                  Add Another Cone
                </Button>
              </div>
              <div className="pt-4">
                <Button variant="success" size="lg" onClick={submitOrder}>
                  Submit Order
                </Button>
              </div>{" "}
              <div className="pt-4">
                <Button variant="secondary" size="lg" onClick={clearCone}>
                  Clear Cone
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Build;
