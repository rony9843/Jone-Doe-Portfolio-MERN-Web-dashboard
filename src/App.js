import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Jone-Doe-Portfolio-MERN-Web-dashboard/"
            element={<Layout />}
          ></Route>
          <Route path="/dashboard/:optionName" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
