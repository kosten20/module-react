import React from "react";
import CardList from "./CreateList.js";
import Header from "./HeaderBasket.js";
import Footer from "./FooterBasket.js";
import Flex from "./Flex.js";

import { useContext } from "react";
import { CartContext } from "./CartContext";

const Basket = (props) => {
  const cart = useContext(CartContext);
  console.log(cart.items);
  return (
    <Flex
      fwidth={"100vw"}
      fheight={"100%"}
      direction={"column"}
      align={"center"}
    >
      <Header />
      <CardList type="little" api={cart.items} />;
      <Footer price={cart.sumPrice} />
    </Flex>
  );
};

export default Basket;
