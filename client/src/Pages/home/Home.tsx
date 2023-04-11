import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function Home() {
  document.title = "NoteBook";
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;
