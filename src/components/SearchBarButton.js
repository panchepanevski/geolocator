import React from "react";
import styled from "@emotion/styled";
import weblocator from "../assets/weblocator.svg";

const InputBtn = styled.button`
  width: 70px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid #2f3442;
  border-radius: 7px;
  background-color: transparent;
  margin-left: 10px;
  outline: none;
  box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.5);
  &:hover {
    transition: 0.5s;
    border: 1px solid #3ae374;
    transition: 0.2s;
  }
`;

const Icon = styled.img`
  margin: 4px;
  width: 40px;
`;

export default function SearchBarButton() {
  return (
    <InputBtn>
      <Icon src={weblocator} />
    </InputBtn>
  );
}
