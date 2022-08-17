import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/dashboard/:optionName" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
