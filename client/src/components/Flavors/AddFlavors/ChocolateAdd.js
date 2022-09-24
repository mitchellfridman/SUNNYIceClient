import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";


function ChocolateAdd({ updateFlavors }) {
  return (
    <div>
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
    </div>
  );
}

export default ChocolateAdd;
