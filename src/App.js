"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SideBar_1 = __importDefault(require("./components/SideBar/SideBar"));
const Feed_1 = __importDefault(require("./components/Feed/Feed"));
const Widget_1 = __importDefault(require("./components/Widget/Widget"));
const fakePosts_d_1 = require("./fakePosts.d");
require("./App.css");
class App extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = { term: "" };
        this.onHandleSearch = (e) => {
            let post;
            console.log(e);
            this.setState({ term: e });
            return post = (0, fakePosts_d_1.getPost)(this.state.term);
        };
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "app" },
                react_1.default.createElement(SideBar_1.default, null),
                react_1.default.createElement(Feed_1.default, null),
                react_1.default.createElement(Widget_1.default, null))));
    }
}
exports.default = App;
