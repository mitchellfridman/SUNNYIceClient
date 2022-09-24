import React from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
// import ReactPaginate from "react-paginate"

const Accounts = () => {

  return (
    <>
      <h1>List of Accounts</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Account Id</th>
            <th>Email</th>
            <th>Password</th>
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

export default Accounts;
