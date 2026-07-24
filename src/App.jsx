import React from "react";
import Navber from "./Layout/Navber";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Drink from "./Pages/Drink";
import Rootlayout from "./Component/Rootlayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index element={<Home />} />
            <Route path="drink" element={<Drink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
