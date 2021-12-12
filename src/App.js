import React from "react";
import Router from "./components/router/Main"
import NavBar from "./components/navbar/Main"
import Footer from "./components/footer/Main"
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
