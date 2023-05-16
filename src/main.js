import React from "react";
import Header from "./Header.js";
import CardList from "./CreateList.js";

const Main = () => {
  return (
    <>
      <Header count={"2"} price={"1300"} />
      <CardList />
    </>
  );
};

export default Main;
