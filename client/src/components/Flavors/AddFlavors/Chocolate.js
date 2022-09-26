import React from "react";
import Card from "react-bootstrap/Card";


function Chocolate({ updateFlavors }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Chocolate</Card.Title>
          <Card.Text>Enjoy our classically decadent Chocolate Flavor.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Chocolate;
