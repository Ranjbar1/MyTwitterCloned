"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./SidebarOption.css");
class SidebarOption extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: `sidebarOption ${this.props.active && "sidebarOption--active"}` },
            react_1.default.createElement(this.props.Icon, null),
            react_1.default.createElement("h2", null, this.props.text)));
    }
}
exports.default = SidebarOption;
