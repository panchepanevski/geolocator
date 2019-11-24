import React from "react";
import styled from "@emotion/styled";

const ResultsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background-color: #fff;
`;

export default function apiResults() {
  return (
    <ResultsContainer>
      <h3>Your results will appear here:</h3>
    </ResultsContainer>
  );
}
