import React from "react";
import Table from "react-bootstrap/Table";
import HeaderAdmin from "../../Header Admin/header";
import TableBody from "./flavTableBody";
import  NewFlavor from "../../Flavors/createFlavor"

function Flavors() {
  
  return (
    <>
    <HeaderAdmin/>
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
        < NewFlavor/>
      </Table>
    </>
  );
};
    
export default Flavors
