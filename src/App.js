import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* React-router-Chat Screen */}
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h2>Welcome</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
