import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ratione totam, explicabo sint repellat incidunt pariatur, error eligendi
        quis quam dolores a voluptatem repellendus rem ut eum reiciendis,
        delectus eveniet sed harum enim quaerat eos laborum neque! Dolorem
        provident, atque quasi officia minima nostrum maiores sequi. Ea modi
        amet saepe incidunt accusantium enim, debitis ratione quisquam adipisci
        laudantium ipsa hic beatae explicabo placeat consectetur corrupti
        architecto facilis nihil eum, quibusdam officia voluptatum vero! Natus,
        odit placeat assumenda molestiae deleniti id amet debitis excepturi,
        blanditiis error impedit totam corrupti neque, ab praesentium
        reprehenderit nisi. Impedit dicta, nesciunt labore quaerat aliquid
        dolores ratione cupiditate? Quam, voluptate pariatur. Obcaecati
        aspernatur incidunt earum voluptate laboriosam optio, fugiat inventore?
        Exercitationem sed laborum iusto magni vero modi iure expedita quos!
        Harum natus repellendus unde eligendi accusantium odit fuga? Eaque esse
        magnam quos ut, omnis amet magni molestiae rerum repellendus est quae
        sit neque quod tempora vero assumenda dignissimos saepe deserunt! Et
        sint libero architecto quas, error recusandae ipsa modi inventore
        asperiores placeat aspernatur sapiente omnis eos voluptates mollitia
        adipisci! Deleniti, dolor libero rerum hic error quam inventore sit ut
        nemo fuga modi minima eaque debitis cum exercitationem, voluptatum
        corporis magni harum laudantium omnis. Aliquam, quos porro!
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/dashboard/:optionName" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
