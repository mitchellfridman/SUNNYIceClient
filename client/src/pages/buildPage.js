import React, { useState, useEffect } from "react";
import Build from "../components/Build-a-cone/Build";
import Header from "../components/Header/header";

function BuildPage() {
  const [flavors, setFlavors] = useState({
    
    van: false,
    straw: false,
    tig: false,
    pup: false,
    rain: false,
    nea: false,
    cho: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("flavours");
    if (data) {
      setFlavors(JSON.parse(data));
    }
  }, []);
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
