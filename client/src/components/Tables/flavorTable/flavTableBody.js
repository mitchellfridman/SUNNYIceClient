import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function TableBody() {
  const [listOfFlavors, setListOfFlavors] = useState([]);
  //   let navigate = useNavigate(); to find by id

  useEffect(() => {
    axios.get("http://localhost:3001/flavours/getAll").then((response) => {
      setListOfFlavors(response.data);
    });
  }, []);
  return (
    <>
      {listOfFlavors.map((flavors, key) => {
        if (!flavors.flavourActive) {
          return (
            <tr>
              <td key={flavors.flavourId}>{flavors.flavourId}</td>
              <td key={flavors.flavorsId}>{flavors.flavourName}</td>
              <td key={flavors.flavorsId}>{flavors.flavourDescription}</td>
              <td>No</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
          );
        } else {
          return (
            <tr >
              <td key={flavors.flavourId}>{flavors.flavourId}</td>
              <td key={flavors.flavorsId}>{flavors.flavourName}</td>
              <td key={flavors.flavorsId}>{flavors.flavourDescription}</td>
              <td>Yes</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
          );
        }
      })}
    </>
  );
}

export default TableBody;
