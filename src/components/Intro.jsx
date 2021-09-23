import React from 'react';
import styled from "styled-components";
import ImgR1 from '../img/ImgR1.jpg';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    //height : 100vh;
    height : calc(100vh - 50px);
    //background-color: red;
    display: flex;
    padding : 20px;
    @media only screen and (max-width: 480px) {
        flex-direction:column;
      }
`;

const Left = styled.div`
   width:60%;
   display:flex;
   flex-direction: column;
   align-items:center;
   justify-content: center;
   @media only screen and (max-width: 480px) {
    width:100%;
    height:100%;
  }
`;
const Title = styled.h1`
    width:60%;
    font-size: 60px;
    @media only screen and (max-width: 480px) {
        width:100%;
        font-size:50px;
    }
`
const Desc = styled.p`
    width:60%;
    font-size: 20px;
    margin-top:20px;
    @media only screen and (max-width: 480px) {
        width:100%;
    } 
`
const Info = styled.div`
    width: 60%;
    margin-top:40px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px) {
        width:100%;
        flex-direction: column;
    } 
`;
const Button = styled.button`
    padding:15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
       margin-bottom:20px;
    } 
`;

const Contact = styled.div`
    display:flex;
    flex-direction: column;
`
const Phone = styled.span`
    color: #f0667d;
    font-weight : bold;
`
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`


const Right = styled.div`
   width:40%;
   @media only screen and (max-width: 480px) {
    display:none;
  }
`;
const Image = styled.img`
    width: 100%;
`;


const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Welcome to Dastugo Tech.</Title>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laboriosam! Esse quos, adipisci perspiciatis explicabo earum libero eveniet consectetur at consequuntur, doloribus architecto mollitia eligendi!</Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                
                    <Contact>
                        <Phone>Call us +90 542 236 71 77</Phone>
                        <ContactText>For any question or concerns</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={ImgR1}></Image>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Intro
