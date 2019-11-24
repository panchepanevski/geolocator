import React from "react";

export class Aplication extends React.Component {
  callApi() {
    fetch(`http://ip-api.com/json/${query}`)
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        console.log(jsonResult);
      });
  }
}
