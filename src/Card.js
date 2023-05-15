import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import Flex from "./Flex.js"
import Button from "./Button.js"

const StyleCard = styled.div`
width: 312px;
height: 552px;

border: 1px solid #D58C51;
`

const StyleImg = styled.img`
width: 270px;
height: 271px;
`

const StyleHeader = styled.h2`
font-weight: 500;
font-size: 17px;
line-height: 21px;

color: ${props => props.color};
`

const StyleP = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: ${props => props.color};
`

const StyleWrap = styled(Flex)`
    color: ${props => props.color};

    width: 264px;
`

const Card = (props) => {
    const [color, setColor] = useState("#FFFFFF")
    const [src, setSrc] = useState("./img/plus.svg") 
    return <StyleCard onMouseEnter={() => setColor("#D58C51")} onMouseLeave={() => setColor("#FFFFFF")} onClick={() => setSrc(src === "./img/plus.svg" ? "./img/krest.svg" : "./img/plus.svg")}>
        <Flex direction={"column"} align={"center"} justify={"space-evenly"} height={"100%"}>
            <StyleImg src={props.img} />
            <StyleHeader color={color}>{props.header}</StyleHeader>
            <StyleP color={color}>{props.text}</StyleP>
            <StyleWrap color={color} justify={"space-between"}><>{props.price} / {props.weight}</><Button src={src} color={color} /></StyleWrap>
        </Flex>
    </StyleCard>
}

export default Card