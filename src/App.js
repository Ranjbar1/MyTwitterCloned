import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widget/Widget";
import "./App.css";

function App() {
  return (

    <React.Fragment>
      <div className="app">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </React.Fragment>)
}

export default App;
