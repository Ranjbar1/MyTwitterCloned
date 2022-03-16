import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
interface WidgetsState {
  searchedTerm?: string;
}
interface WidgetsProps {
  onSubmitSearch?: any;
}
class Widgets extends React.Component<WidgetsProps, WidgetsState> {
  state = { searchedTerm: "" };

  onFormSubmit = (e?: any) => {
    e.preventDefault();
    console.log(this.state.searchedTerm);
    return this.props.onSubmitSearch(this.state.searchedTerm);
  };
//  handleSearch=({currentTarget:name})=>{
//    const term =[...this.state.searchedTerm]
//    term =

// }
    
  render() {
    return (
      <div className="widgets">
        <form onSubmit={this.onFormSubmit}>
          <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input

            name="searchedTerm"
              placeholder="Search Twitter"
              type="text"
              value={this.state.searchedTerm}
              // onChange={this.handleSearch}
            />
          </div>
        </form>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
        </div>
      </div>
    );
  }
}

export default Widgets;
