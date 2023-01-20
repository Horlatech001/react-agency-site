import React, { useState } from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import Sample from "../media/sample.mp4";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const ServiceLeft = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ServiceRight = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1``;

const Desc = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: red;
  right: 5px;
  top: 18%;
  color: white;
  @media only screen and (max-width: 480px) {
    top: 25%;
  }
`;
const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  const bigScreen = window.screen.width >= 480 ? true : false;
  return (
    <Container>
      <ServiceLeft>
        <Image open={open} src={Woman} />
        {bigScreen && open && (
          <>
            <Video open={open} autoplay loop controls src={Sample} />
            <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
          </>
        )}
      </ServiceLeft>
      <ServiceRight>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital services to startups and small businesss to
            looking for a partner of their digital media, design & development,
            lead generation and communications requirements. We work with you,
            not for you. Although we have a great resourcese.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </ServiceRight>
      {smallScreen && open && (
        <Modal>
          <Video open={open} autoplay loop controls src={Sample} />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
