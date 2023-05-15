import React from 'react';
import styled from 'styled-components'

const StyleButton = styled.div`
    width: 30px;
    height: 30px;

    background: ${props => props.color === "#FFFFFF" ? "transparent" : props.color};
    border-radius: 50%;
    border: 1px solid ${props => props.color};

    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = (props) => {
    return <StyleButton {...props}><img src={props.src} alt="" /></StyleButton>
}

export default Button