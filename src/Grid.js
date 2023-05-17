import React from "react";
import styled from "styled-components";

const StyleGrid = styled.div`
  display: grid;
  ${(props) =>
    props.type === "little"
      ? "grid-template-columns: repeat(auto-fill, minmax(450px, 860px)); grid-template-rows: repeat(auto-fill, 132px);"
      : "grid-template-columns: repeat(auto-fill, 312px); grid-template-rows: repeat(auto-fill, 552px);"}

  gap: 35px 20px;
  justify-content: center;
  max-width: 100%;
  height: calc(100% - 150px);
`;
const Grid = (props) => {
  return <StyleGrid {...props} />;
};
export default Grid;
