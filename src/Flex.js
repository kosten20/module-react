import React from 'react';
import styled from "styled-components"

const StyleFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "stretch"};
    align-items: ${props => props.align || "stretch"};
    gap: ${props => props.gap};
    width: ${props => props.width};
    height: ${props => props.height};
`

const Flex = (props) => <StyleFlex {...props} />

export default Flex