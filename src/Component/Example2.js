import React from "react";
import styled from "styled-components";



const Secondexample = () => {

    const Button = styled.button`

    // props

    background : ${props => props.primary ? "palevioletred" : "white"};
    color : ${props => props.primary ? "white" : "palevioletred"};

    font-size : 16px;
    margin:0px 10px;
    padding: 10px 10px;
    border : 2px solid palevioletred;
    border-radius : 3px;
    `;

    const TomatoButton = styled(Button)`
    color: tomato;
    border-color : tomato;
    `;

    const ReverseButton = props => <Button  {...props} children={props.children.split('').reverse()}/>

    return (

        <main>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <TomatoButton>TomatoButton</TomatoButton>
            <Button as={ReverseButton}>Button with reverse text</Button>
        </main>
    )
}

    
    export default Secondexample;