import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          font-family: "Ubuntu", sans-serif;
          background: #ffffff;
          color: #2f3542;
          font-size: 16px;
          margin: 0;
          letter-spacing: 1px;
        }
      `}
    />
  );
}
