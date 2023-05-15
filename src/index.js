import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components'
import Flex from "./Flex.js"

import CardList from "./CardList.js"
import Header from "./Header.js"

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
}
body {
  background: #161516;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <Flex direction={"column"} align={"center"}>
      <Header count={"2"} price={"1300"}/>
      <CardList />
    </Flex>
    
  </React.StrictMode>
);