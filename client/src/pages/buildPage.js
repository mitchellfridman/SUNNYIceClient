import React, { useState } from "react";
import Build from "../components/Build-a-cone/Build";
import Header from "../components/Header/header";

function BuildPage() {
  const [flavors, setFlavors] = useState({
    cho: "false",
    van: "false",
    straw: "false",
    tig: "false",
    pup: "false",
    rain: "false",
    nea: "false",
  });
  return (
    <>
      <Header />
      <Build 
        flavors={flavors}
        setFlavors = {setFlavors}
       />
    </>
  );
}

export default BuildPage;
