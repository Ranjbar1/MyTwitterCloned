"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// essential components
const react_1 = __importDefault(require("react"));
const SidebarOption_1 = __importDefault(require("../SidebarOption/SidebarOption"));
require("./SideBar.css");
//Material ui components
const Twitter_1 = __importDefault(require("@material-ui/icons/Twitter"));
const Home_1 = __importDefault(require("@material-ui/icons/Home"));
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
const NotificationsNone_1 = __importDefault(require("@material-ui/icons/NotificationsNone"));
const MailOutline_1 = __importDefault(require("@material-ui/icons/MailOutline"));
const BookmarkBorder_1 = __importDefault(require("@material-ui/icons/BookmarkBorder"));
const ListAlt_1 = __importDefault(require("@material-ui/icons/ListAlt"));
const PermIdentity_1 = __importDefault(require("@material-ui/icons/PermIdentity"));
const MoreHoriz_1 = __importDefault(require("@material-ui/icons/MoreHoriz"));
const core_1 = require("@material-ui/core");
function SideBar() {
    return (react_1.default.createElement("div", { className: "sidebar" },
        react_1.default.createElement(Twitter_1.default, { className: "sidebar__twitterIcon" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: Home_1.default, text: "Home" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: Search_1.default, text: "Explore" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: NotificationsNone_1.default, text: "Notifications" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: MailOutline_1.default, text: "Messages" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: BookmarkBorder_1.default, text: "Bookmarks" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: ListAlt_1.default, text: "Lists" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: PermIdentity_1.default, text: "Profile" }),
        react_1.default.createElement(SidebarOption_1.default, { active: true, Icon: MoreHoriz_1.default, text: "More" }),
        react_1.default.createElement(core_1.Button, { variant: "outlined", className: "sidebar__tweet", fullWidth: true }, "Tweet")));
}
exports.default = SideBar;
