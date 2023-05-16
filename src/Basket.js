import React from "react";
import CardList from "./CreateList.js";
import Header from "./HeaderBasket.js";
import Footer from "./FooterBasket.js";
import Flex from "./Flex.js";

const Basket = (props) => {
  return (
    <Flex fWidth={"70vw"} direction={"column"}>
      <Header />
      <CardList type="little" />;
      <Footer />
    </Flex>
  );
};

export default Basket;
