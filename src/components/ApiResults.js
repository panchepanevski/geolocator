import React from "react";
import styled from "@emotion/styled";

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background-color: #fff;
`;

export default function ApiResults({ geolocation }) {
  return (
    <ResultsContainer>
      {geolocation && <h1>Your search results:</h1>}
      {geolocation && (
        <p>
          <b>ISP:</b> {geolocation.isp}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Organisation:</b> {geolocation.org}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Country:</b> {geolocation.country}
        </p>
      )}
      {geolocation && (
        <p>
          <b>City:</b> {geolocation.city}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Region name:</b> {geolocation.regionName}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Timezone:</b> {geolocation.timezone}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Zip:</b> {geolocation.zip}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Lat:</b> {geolocation.lat}
        </p>
      )}
      {geolocation && (
        <p>
          <b>Lon:</b> {geolocation.lon}
        </p>
      )}
    </ResultsContainer>
  );
}
