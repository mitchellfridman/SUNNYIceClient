import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function TableBody() {
  const [listOfOrders, setListOfOrders] = useState([]);
//   let navigate = useNavigate(); to find by id

  useEffect(() => {
    axios.get("http://localhost:3001/orders/getAll").then((response) => {
      setListOfOrders(response.data);
    });
  }, []);

  return (
    <>
      {listOfOrders.map((orders) => {
        return (
          //on click div to find by id, order history etc
          
            <tr>
              <td key={orders.orderId}>{orders.orderId}</td>
              <td key={orders.orderId}>{orders.orderStatus}</td>
              <td key={orders.orderId}>{orders.accountId}</td>
              <td key={orders.orderId}>{orders.coneId}</td>
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
