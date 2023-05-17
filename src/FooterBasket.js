import React from "react";
import styled from "styled-components";
import Flex from "./Flex.js";

const Button = styled.button`
  width: 200px;
  height: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #d58c51;
  color: #131313;
  border: 1px solid #d58c51;
`;
const StyleText = styled.p`
  color: #ffffff;
  display: flex;
  gap: 10px;
`;
const StylePrice = styled.div`
  color: #d58c51;
`;
const Gorizont = styled.hr`
  border-top: 1px solid #d58c51;
  width: 100%;
`;

const Footer = (props) => {
  return (
    <>
      <Gorizont />
      <Flex
        align={"center"}
        justify={"space-between"}
        fwidth={"70vw"}
        fheight={"90px"}
      >
        <StyleText>
          Заказ на сумму:<StylePrice>{props.price + " руб"}</StylePrice>
        </StyleText>
        <Button>Оформить заказ</Button>
      </Flex>
    </>
  );
};

export default Footer;
