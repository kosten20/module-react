import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex.js";
import Button from "./Button.js";

const StyleCard = styled.div`
  ${(props) => props.type === "little" || "border: 1px solid #d58c51"};
`;

const StyleHeader = styled.h2`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;

  color: ${(props) => props.color};
`;

const StyleP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: ${(props) => props.color};
`;

const StyleWrap = styled(Flex)`
  color: ${(props) => props.color};

  ${(props) => (props.type === "little" ? "gap: 20px" : "width: 264px")};
`;

const Card = (props) => {
  const [color, setColor] = useState("#FFFFFF");
  const [src, setSrc] = useState(
    props.type === "little" ? "./img/krest.svg" : "./img/plus.svg"
  );
  return (
    <StyleCard
      type={props.type}
      width={props.width}
      height={props.height}
      onMouseEnter={() => setColor("#D58C51")}
      onMouseLeave={() => setColor("#FFFFFF")}
      onClick={() =>
        setSrc(src === "./img/plus.svg" ? "./img/krest.svg" : "./img/plus.svg")
      }
    >
      <Flex {...props}>
        <img
          src={props.img}
          width={props.imgWidth}
          height={props.imgHeight}
          alt=""
        />
        <StyleHeader color={color}>{props.header}</StyleHeader>
        {props.text && <StyleP color={color}>{props.text}</StyleP>}
        <StyleWrap
          color={color}
          justify={"space-between"}
          align={"center"}
          type={props.type}
        >
          <>
            {props.price} {props.weight && "/ " + props.weight}
          </>
          {props.type === "little" ? (
            <Button src={src} color={"#D58C51"} type />
          ) : (
            <Button src={src} color={color} />
          )}
        </StyleWrap>
      </Flex>
    </StyleCard>
  );
};

export default Card;
