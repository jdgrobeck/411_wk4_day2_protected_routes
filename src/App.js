import React from "react";
// Can import BrowserRouter here or in index.js 
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Router from "./Router";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
