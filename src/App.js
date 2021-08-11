import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <SubMenu></SubMenu>
    </>
  );
};

export default App;
