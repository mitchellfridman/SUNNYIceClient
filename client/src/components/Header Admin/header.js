import React, { useState } from "react";
import NavbarAdmin from "./NavBar/navbar";
import SidebarAdmin from "./SideBar/sidebar";

function HeaderAdmin() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SidebarAdmin isOpen={isOpen} toggle={toggle} />
      <NavbarAdmin toggle={toggle} />
    </>
  );
}

export default HeaderAdmin;
