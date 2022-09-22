import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ChocolateAdd() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Chocolate</Card.Title>
          <Card.Text>Enjoy our milky Chocolate Flavor</Card.Text>
          <Button variant="primary">Add Scoop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChocolateAdd;
