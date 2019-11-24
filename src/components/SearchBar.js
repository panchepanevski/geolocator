import React from "react";
import styled from "@emotion/styled";
import InputFieldIp from "./SearchBarInput";
import InputButton from "./SearchBarButton";

const InputFieldWrapper = styled.div`
  height: 70px;
  width: 100%;
  padding: 0 10px 0 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export default function SearchBar() {
  return (
    <>
      <InputFieldWrapper>
        <InputFieldIp />
        <InputButton />
      </InputFieldWrapper>
    </>
  );
}
