import React from "react";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
