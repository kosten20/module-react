import React from "react";
import Card from "./Card.js";
import Grid from "./Grid.js";

import { useContext } from "react";
import { CartContext } from "./CartContext";

const List = (props) => {
  const dataArr = props.api || [];
  const cart = useContext(CartContext);
  const elems = dataArr.map((item) => {
    return props.type === "little" ? (
      <Card
        onClick={() => cart.append(item)}
        key={item.id}
        type={"little"}
        img={item.img}
        header={item.header}
        price={item.price}
        imgwidth={"132px"}
        imgheight={"132px"}
        align={"center"}
        justify={"space-between"}
      />
    ) : (
      <Card
        onClick={() => cart.append(item)}
        key={item.id}
        fwidth={"312px"}
        fheight={"552px"}
        img={item.img}
        header={item.header}
        text={item.text}
        price={item.price}
        weight={item.weight}
        direction={"column"}
        align={"center"}
        justify={"space-evenly"}
        imgwidth={"270px"}
        imgheight={"271px"}
      />
    );
  });
  return <Grid type={props.type}>{elems}</Grid>;
};
export default List;
