import React from "react";
import Navber from "./Layout/Navber";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Drink from "./Pages/Drink";
import Rootlayout from "./Component/Rootlayout";
import Club from "./Pages/Club";
import Reservations from "./Pages/Reservations";
import OrderComplete from "./Pages/OrderComplete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index element={<Home />} />
            <Route path="drink" element={<Drink />} />
            <Route path="club" element={ <Club/> }/>
            <Route path="reservations" element={ <Reservations/> }/>
            <Route path="order-completed" element={ <OrderComplete/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
