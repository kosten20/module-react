import React from 'react';
import Card from "./Card.js"
import Flex from "./Flex.js"
import Api from "./Api.js"

const list = () => {
    const elems = Api.map((item) => {
        return <Card img={item.img} header={item.header} text={item.text} price={item.price} weight={item.weight}/>
    })
    return <Flex width={"90vw"} height={"calc(100vh – 150px)"} justify={"space-between"} gap={"20px"}>{elems}</Flex>
}

export default list
