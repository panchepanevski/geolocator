import { keyframes } from "@emotion/core";

const pacMan = keyframes`
  0% {
    stroke-dasharray: 79px 79;
  }
  50% {
    stroke-dasharray: 1px 79;
  }
  100% {
    stroke-dasharray: 79px 79;
   
  }
`;

export default pacMan;
