import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function TableBody() {
  const [listOfAccounts, setListOfAccounts] = useState([]);
//   let navigate = useNavigate(); to find by id

  useEffect(() => {
    axios.get("http://localhost:3001/accounts/getAll").then((response) => {
      setListOfAccounts(response.data);
    });
  }, []);

  return (
    <>
      {listOfAccounts.map((accounts) => {
        return (
          //on click div to find by id, order history etc
          
            <tr>
              <td key={accounts.accountId}>{accounts.accountId}</td>
              <td key={accounts.accountId}>{accounts.email}</td>
              {/* <td>{accounts.password}</td> */}
              <td>
                <Button variant="secondary">View</Button>
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>

        );
      })}
    </>
  );
}

export default TableBody;
