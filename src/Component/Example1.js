import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Example = () => {

const Title = styled.h1`
     font-size:1.5em;
     text-align:center;
     color:palevioletred;
     `;

const Wrapper = styled.section`
    padding:4em;
    background:papayawhip;
    margin : 10px 50px 50px;
    `;     

  return (
    <main>
        <Wrapper>
        <Title>Welcome to the drc systems</Title>
        </Wrapper>
  </main>
  );
}

export default Example;
