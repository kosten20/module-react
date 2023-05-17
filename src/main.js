import React from "react";
import Header from "./Header.js";
import CardList from "./CreateList.js";
import Api from "./Api.js";

const Main = () => {
  return (
    <div width={"100%"}>
      <Header />
      <CardList api={Api} />
    </div>
  );
};

export default Main;
