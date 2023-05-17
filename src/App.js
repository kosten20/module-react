import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./CartContext";
import Main from "./main.js";

import Basket from "./Basket.js";

const App = () => (
  <CartContextProvider>
    <Routes>
      <Route path="/module-react" element={<Main />} />
      <Route path="/module-react/basket" element={<Basket />} />
    </Routes>
  </CartContextProvider>
);

export default App;
