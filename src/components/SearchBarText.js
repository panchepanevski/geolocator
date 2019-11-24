import React from "react";
import styled from "@emotion/styled";

const SearchBarTextTop = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

export default function SearchBarText() {
  return (
    <SearchBarTextTop>
      <h2>Еnter your desired URL to get the location of the server host</h2>
    </SearchBarTextTop>
  );
}
