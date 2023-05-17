import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button.js";
import Flex from "./Flex.js";

import { useContext } from "react";
import { CartContext } from "./CartContext";

const HeaderText = styled.h1`
  font-weight: 700;
  font-size: calc(10px + 15 * (100vw / 1440));
  line-height: 38px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Wrap = styled(Flex)`
  color: #ffffff;
`;
const StyleButton = styled(Button)`
  width: 50px;
  height: 50px;
`;
const NLink = styled(Link)`
  text-decoration: none;
`;
const Header = (props) => {
  const cart = useContext(CartContext);
  return (
    <Flex
      fheight={"150px"}
      align={"center"}
      fwidth={"90vw"}
      justify={"space-between"}
      style={{ margin: "0px 5vw" }}
    >
      <HeaderText>наша продукция</HeaderText>
      <NLink to="Basket">
        <Flex height={"50px"} gap={"20px"}>
          <Wrap direction={"column"} justify={"center"} align={"flex-end"}>
            <div>{cart.length} товара</div> <div>на сумму {cart.sumPrice}</div>
          </Wrap>
          <StyleButton color={"#D58C51"} src={"/img/basket.svg"} />
        </Flex>
      </NLink>
    </Flex>
  );
};
export default Header;
