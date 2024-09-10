import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import AllRoutes from "./AllRoutes";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AllRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
