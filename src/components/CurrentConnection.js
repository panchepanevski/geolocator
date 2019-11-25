import React from "react";
import styled from "@emotion/styled";
import currentConectionIconSvg from "../assets/CurrentConectionIconSvg.svg";
import getGeolocation from "../api/getGeolocation";
import ApiResults from "./ApiResults";

const CurrentConectionBar = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 210px;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  margin-top: 60px;
  box-shadow: 0px 1px 12px -1px rgba(206, 214, 224, 0.3);
`;

const CurrentConectionButton = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #2f3442;
  border-radius: 7px;
  background-color: transparent;
  outline: none;
  box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.5);
  &:hover {
    transition: 0.5s;
    border: 1px solid #3ae374;
    transition: 0.2s;
  }
`;

const CurrentConectionIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const CurrentConectionText = styled.h2`
  padding-top: 10px;
`;

export default function CurrentConection() {
  const [geolocation, setGeolocation] = React.useState(null);

  async function handleClick() {
    const newGeolocation = await getGeolocation("");
    setGeolocation(newGeolocation);
  }

  return (
    <>
      <CurrentConectionBar>
        <CurrentConectionText>
          You use an internet connection but don't know from which provider?
        </CurrentConectionText>

        <CurrentConectionButton onClick={handleClick}>
          FIND OUT
          <CurrentConectionIcon src={currentConectionIconSvg} />
        </CurrentConectionButton>
      </CurrentConectionBar>
      <ApiResults geolocation={geolocation} />
    </>
  );
}
