import React from "react";
import Function from "../Function/Function";
import Navbar from "../NavBar/Navbar";
import SideBar from "../SideBar/SideBar";

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="d-flex">
        <SideBar></SideBar>
        <Function></Function>
      </div>
    </div>
  );
}
