"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Widgets.css");
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
class Widgets extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = { searchedTerm: "" };
        this.onFormSubmit = (e) => {
            e.preventDefault();
            console.log(this.state.searchedTerm);
            return this.props.onSubmitSearch(this.state.searchedTerm);
        };
    }
    //  handleSearch=({currentTarget:name})=>{
    //    const term =[...this.state.searchedTerm]
    //    term =
    // }
    render() {
        return (react_1.default.createElement("div", { className: "widgets" },
            react_1.default.createElement("form", { onSubmit: this.onFormSubmit },
                react_1.default.createElement("div", { className: "widgets__input" },
                    react_1.default.createElement(Search_1.default, { className: "widgets__searchIcon" }),
                    react_1.default.createElement("input", { name: "searchedTerm", placeholder: "Search Twitter", type: "text", value: this.state.searchedTerm, onChange: this.handleSearch }))),
            react_1.default.createElement("div", { className: "widgets__widgetContainer" },
                react_1.default.createElement("h2", null, "What's happening"))));
    }
}
exports.default = Widgets;
