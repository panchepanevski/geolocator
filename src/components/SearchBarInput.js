import React from "react";
import styled from "@emotion/styled";

const InputField = styled.input`
  height: 50px;
  flex-grow: 1;
  padding: 20px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #2f3442;
  border-radius: 7px;
  box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.5);
  outline: none;
  &::placeholder {
    color: #2f3442;
  }
  &:hover {
    transition: 0.5s;
    border: 1px solid #3ae374;
    transition: 0.2s;
  }
`;

export default function SearchBarInput() {
  return <InputField autoFocus placeholder="Enter web adress" />;
}
