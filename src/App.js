import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Main />
      <Footer />
    </HashRouter>
  );
}

export default App;
