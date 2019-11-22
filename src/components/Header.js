import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

const AppBar = styled.header`
  height: 100px;
  width: 100%;
  background-color: #ced6e0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.5);
  -webkit-box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.5);
  -moz-box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.5);
`;

export default function Header() {
  return (
    <>
      <AppBar>
        <Logo />
      </AppBar>
    </>
  );
}
