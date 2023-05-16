import React from "react";
import Card from "./Card.js";
import Grid from "./Grid.js";
import Api from "./Api.js";

const list = (props) => {
  const elems = Api.map((item) => {
    return props.type === "little" ? (
      <Card
        type={"little"}
        fWidth={"860px"}
        fHeight={"132px"}
        img={item.img}
        header={item.header}
        price={item.price}
        imgWidth={"132px"}
        imgHeight={"132px"}
        align={"center"}
        justify={"space-between"}
      />
    ) : (
      <Card
        fWidth={"312px"}
        fHeight={"552px"}
        img={item.img}
        header={item.header}
        text={item.text}
        price={item.price}
        weight={item.weight}
        direction={"column"}
        align={"center"}
        justify={"space-evenly"}
        imgWidth={"270px"}
        imgHeight={"271px"}
      />
    );
  });
  return <Grid type={props.type}>{elems}</Grid>;
};
/*      fWidth={"90vw"}
      fHeight={"calc(100vh – 150px)"}
      justify={"space-between"}
      gap={"20px"}*/
export default list;
