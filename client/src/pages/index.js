import React, { useState } from "react";
import Navbar from "../components/NavBar/navbar";
import Sidebar from "../components/SideBar/sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
}

export default Home;
