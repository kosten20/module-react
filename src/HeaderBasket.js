import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const StyleHead = styled.h1`
  font-weight: 700;
  font-size: calc(10px + 13 * (100vw / 1440));
  line-height: 38px;

  text-transform: uppercase;
  color: #ffffff;
`;
const NLink = styled(Link)`
  text-decoration: none;
`;
const Header = () => {
  return (
    <Flex
      justify={"space-between"}
      fwidth={"70vw"}
      fheight={"150px"}
      align={"center"}
    >
      <NLink to="/">
        <Button src={"/img/arrow.svg"} color={"#D58C51"} type />
      </NLink>
      <StyleHead>Корзина с выбранными товарами</StyleHead>
    </Flex>
  );
};
export default Header;
