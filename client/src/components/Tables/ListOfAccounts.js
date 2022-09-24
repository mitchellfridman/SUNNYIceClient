import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Accounts = () => {
  const accounts = {
    id: "102",
    email: "admin@admin.com",
    password: "admin",
    lastDate: "6:20pm 12/07/2022"
  }
  return (
    <>
      <h1>List of Accounts</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Account Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Last Order date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{accounts.id}</td>
            <td>{accounts.email}</td>
            <td>{accounts.password}</td>
            <td>{accounts.lastDate}</td>
            <td>
            <Button variant="secondary">View</Button>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Chocolate</td>
            <td>Very Long Description</td>
            <td>yes</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Chocolate</td>
            <td>Very Long Description</td>
            <td>no</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Accounts;
