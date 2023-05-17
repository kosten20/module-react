import React from "react";
import styled from "styled-components";

const StyleFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  width: ${(props) => props.fwidth};
  height: ${(props) => props.fheight};
`;

const Flex = (props) => <StyleFlex {...props} />;

export default Flex;
