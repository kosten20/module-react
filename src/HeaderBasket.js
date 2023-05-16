import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Flex from "./Flex";

const StyleHead = styled.h1`
  font-weight: 700;
  font-size: 31px;
  line-height: 38px;

  text-transform: uppercase;
  color: #ffffff;
`;

const Header = () => {
  return (
    <Flex
      justify={"space-between"}
      fWidth={"100%"}
      fHeight={"150px"}
      align={"center"}
      gap={"70px"}
    >
      <Button src={"./img/arrow.svg"} color={"#D58C51"} type />
      <StyleHead>Корзина с выбранными товарами</StyleHead>
    </Flex>
  );
};
export default Header;
