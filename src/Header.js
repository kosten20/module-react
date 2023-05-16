import React from "react";
import styled from "styled-components";
import Button from "./Button.js";
import Flex from "./Flex.js";

const HeaderText = styled.h1`
  font-weight: 700;
  font-size: 31px;
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
const Header = (props) => {
  return (
    <Flex
      fHeight={"150px"}
      align={"center"}
      fWidth={"90vw"}
      justify={"space-between"}
    >
      <HeaderText>наша продукция</HeaderText>
      <Flex height={"50px"} gap={"20px"}>
        <Wrap direction={"column"} justify={"center"} align={"flex-end"}>
          <div>{props.count} товара</div> <div>на сумму {props.price}</div>
        </Wrap>
        <StyleButton color={"#D58C51"} src={"./img/basket.svg"} />
      </Flex>
    </Flex>
  );
};
export default Header;
