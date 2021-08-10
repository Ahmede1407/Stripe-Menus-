import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

const App = () => {
  return (
    <>
      <h3>App component</h3>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sidebar></Sidebar>
      <SubMenu></SubMenu>
    </>
  );
};

export default App;
