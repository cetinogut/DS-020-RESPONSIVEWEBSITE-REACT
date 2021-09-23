import React from 'react'
import styled from "styled-components";
import MobileApp from '../img/MobileApp.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display : flex;
    @media only screen and (max-width: 480px) {
        flex-direction:column;
        padding: 30px 20px;
     } 
`;
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        display:none;
     } 
`;
const Image = styled.img`
    width: 80%;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justfy-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
     } 
`;

const Title = styled.span`
    font-size:70px;
    @media only screen and (max-width: 480px) {
        font-size:50px;
     } 
    
`;
const Subtitle = styled.span`
    font-size:24px;
    font-style: italic;
    color:#333;
    margin-top:30px;
`;
const Desc = styled.p`
    font-size:20px;
    color:#777;
    margin-top:30px;
`;

const Button = styled.button`
    width:150px;
    border:none;
    padding: 15px 20px;
    color: white;
    background-color: darkblue;
    font-size:20px;
    margin-top:20px;
    border-radius: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        margin-left: 70px;
     } 
`;


const Feature = () => {
    return (
        <Container>
            <Left><Image src={MobileApp}/></Left>
            <Right>
                <Title>
                    <b>good</b> design 
                    <br/>
                    <b>good</b> business 
                </Title>
                <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias esse corrupti, consectetur dicta reiciendis quas dolorem sed aut officiis dolores.</Desc>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias esse corrupti, consectetur dicta reiciendis quas dolorem sed aut officiis dolores.</Desc>
               
                <Button>Learn More</Button>

            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
