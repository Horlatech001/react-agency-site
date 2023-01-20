import React from "react";
import styled from "styled-components";
import App from "../img/App1.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const FeatureLeft = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const FeatureIcon = styled.img`
  width: 80%;
  margin-top: 100px;
`;
const FeatureRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 50px;
  }
`;
const FeatureTitle = styled.span`
  font-size: 55px;
  @media only screen and (max-width: 480px) {
    font-size: 45px;
  }
`;
const FeatureSubTitle = styled.span`
  font-size: 20px;
  font-style: italic;
  color: #333;
  margin-top: 25px;
`;
const FeatureDesc = styled.p`
  font-size: 16px;
  color: #777;
  margin-top: 25px;
`;
const FeatureButton = styled.button`
  width: 150px;
  border: none;
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
`;
const Feature = () => {
  return (
    <Container>
      <FeatureLeft>
        <FeatureIcon src={App} />
      </FeatureLeft>
      <FeatureRight>
        <FeatureTitle>
          <b>Good</b> Design <br />
          <b>Good</b> Business
        </FeatureTitle>
        <FeatureSubTitle>
          We Know that good design means good business.
        </FeatureSubTitle>
        <FeatureDesc>
          We help our clients succeed by creating brand identities, and print
          materials that communictae clearly, achieve marketing goals and look
          fantastic.
        </FeatureDesc>
        <FeatureDesc>
          We care for your business and guarantee you to achive marketing goals.
        </FeatureDesc>
        <FeatureButton>Learn More</FeatureButton>
      </FeatureRight>
      <AnimatedShape />
    </Container>
  );
};

export default Feature;
