import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widget/Widget";
import { getPost, getPosts, } from "./fakePosts"
import "./App.css";

class App extends React.Component {
  state = { term: "" }
  onHandleSearch = (e) => {
    console.log(e)
    this.setState({ term = e })
    return post = getPost(this.state.term)
  }
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <SideBar />
          <Feed searchedTerm={this.onHandleSearch()} />
          <Widgets onSubmitSearch={this.onHandleSearch} />
        </div>
      </React.Fragment>)
  }

}

export default App;
