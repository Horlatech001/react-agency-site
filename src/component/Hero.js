import React from "react";
import styled from "styled-components";
import Man from "../img/manB.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const HeroLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  width: 60%;
  marging-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Info = styled.div`
  width: 60%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  border: none;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const HeroRight = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const HeroImg = styled.img`
  width: 100%;
  margin-top: 100px;
`;
const Hero = () => {
  return (
    <Container>
      <HeroLeft>
        <Title>Adventures in creative age</Title>
        <Description>
          We believe that designing and services in close partnership with our
          clients is the only way to have a real impact on their business.
        </Description>
        <Info>
          <Button>Start A Project</Button>
          <Contact>
            <Phone>Call Us (+234) 903 5537 330</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </HeroLeft>
      <HeroRight>
        <HeroImg src={Man} />
      </HeroRight>
      <AnimatedShape />
    </Container>
  );
};

export default Hero;
