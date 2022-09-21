import React from "react";
import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/herosection";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from './login'
// import Register from "./register";
// import Flavours from "./flavours";
// import Build from "./build";


function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flavours" element={<Flavours />} /> *Should active and inactive flavours be the same page with two sections or two separate pages?
        <Route path="/build" element={<Build />} /> *This is the page you will build your cone
      </Routes>
      </Router> */}
    </>
  );
}

export default Home;
