import React from "react";
import Router from "./components/router/Router";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
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
