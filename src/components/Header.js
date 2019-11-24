import React from "react";
import styled from "@emotion/styled";
import Spinner from "./Logo";

const AppBar = styled.header`
  height: 70px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.3);
`;

export default function Header() {
  return (
    <>
      <AppBar>
        <Spinner />
      </AppBar>
    </>
  );
}
