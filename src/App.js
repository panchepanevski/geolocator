import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchBarText from "./components/SearchBarText";
import CurrentConection from "./components/CurrentConnection";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <SearchBarText />
      <SearchBar />
      <CurrentConection />
    </>
  );
}

export default App;
