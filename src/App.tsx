import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widget/Widget";
import { getPost, getPosts} from "./fakePosts.d"
import "./App.css";

class App extends React.Component {
  state = { term: "" }
  onHandleSearch = (e:any) => {
    let post;
    console.log(e)
    this.setState({ term: e })
    return post = getPost(this.state.term)
  }
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <SideBar />
          <Feed  />
          {/* <Feed searchedTerm={this.onHandleSearch()} /> */}
          <Widgets />
        </div>
      </React.Fragment>)
  }

}

export default App;
