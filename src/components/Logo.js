import React from "react";

export default function Spinner() {
  return (
    <React.Fragment>
      <style>
        {`
    .background {
      fill: #2F3442;
    }
    .line {
      animation: PacMan 5s infinite;
      fill: none;
      stroke: #3ae374;
      stroke-width: 25;
    }

    .spinner {
      animation: Spin 2s infinite linear;
    }

    @keyframes PacMan {
      0% {
        stroke-dasharray: 79px 79;
      }
      50% {
        stroke-dasharray: 1px 79;
      }
      100% {
        stroke-dasharray: 79px 79;
      }
    }

    @keyframes Spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    `}
      </style>
      <svg class="spinner" width="90" height="90" viewBox="0 0 100 100">
        <circle className="background" r="24" cx="50" cy="50"></circle>
        <path
          className="line"
          d="M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"
        ></path>
      </svg>
      <h1>geolocator</h1>
    </React.Fragment>
  );
}
