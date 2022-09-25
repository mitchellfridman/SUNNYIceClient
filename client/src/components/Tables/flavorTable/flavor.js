import React from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";

function Flavors() {
  return (
    <>
      <h1>List of Flavors</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Flavor Id</th>
            <th>Flavor Name</th>
            <th>Flavor Description</th>
            <th>Serving</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
            <TableBody/>
        </tbody>
      </Table>
    </>
  );
};
    
export default Flavors
