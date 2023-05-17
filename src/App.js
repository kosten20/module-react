import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./CartContext";
import Main from "./main.js";

import Basket from "./Basket.js";

const App = () => (
  <CartContextProvider>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  </CartContextProvider>
);

export default App;
