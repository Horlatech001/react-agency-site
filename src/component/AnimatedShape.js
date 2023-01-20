import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rect = styled.div`
  width: 40px;
  height: 80px;
  background-color: #669966;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rect 25s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShape = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
};

export default AnimatedShape;
