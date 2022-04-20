import React from "react";
import styled from "styled-components";



const ThirdExample = () => {

    const Input = styled.input`
    padding : 0.5em;
    margin : 50px 10px;
    color : ${props => props.inputColor || "palevioletred"};
    background:papayawhip;
    border : none;
    border-radius : 3px;
    text-align : center;
    `; 

    return(
        <main>
            <Input type="text" defaultValue="@meet"/>
            <Input type="text" defaultValue="@utsav" inputColor="rebeccapurple"/>
        </main>

    )
}

export default ThirdExample;