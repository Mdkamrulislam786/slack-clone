import React from "react";
import "./App.css";

//COMPONENTS
import Header from "./Components/Header/Header";
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        {/* React-router-Chat Screen */}
      </div>
    </div>
  );
}

export default App;
