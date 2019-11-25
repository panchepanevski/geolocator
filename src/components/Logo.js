import React from "react";
import styled from "@emotion/styled";
import { spin, pacMan } from "../animations";

const Svg = styled.svg`
  animation: ${spin} 2s infinite linear;
  width: 90px;
  height: 90px;
`;

const Circle = styled.circle`
  fill: #2f3442;
`;

const Path = styled.path`
  animation: ${pacMan} 5s infinite;
  fill: none;
  stroke: #3ae374;
  stroke-width: 25;
`;

export default function Spinner() {
  return (
    <>
      <Svg viewBox="0 0 100 100">
        <Circle r="24" cx="50" cy="50"></Circle>
        <Path d="M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"></Path>
      </Svg>
      <h1>geolocator</h1>
    </>
  );
}
