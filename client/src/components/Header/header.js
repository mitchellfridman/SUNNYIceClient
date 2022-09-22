import React, { useState } from "react";
import Navbar from "./NavBar/navbar";
import Sidebar from "./SideBar/sidebar";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  )
}

export default Header
