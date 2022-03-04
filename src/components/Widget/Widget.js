"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Widget.css");
const react_twitter_embed_1 = require("react-twitter-embed");
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
function Widgets() {
    return (react_1.default.createElement("div", { className: "widgets" },
        react_1.default.createElement("div", { className: "widgets__input" },
            react_1.default.createElement(Search_1.default, { className: "widgets__searchIcon" }),
            react_1.default.createElement("input", { placeholder: "Search Twitter", type: "text" })),
        react_1.default.createElement("div", { className: "widgets__widgetContainer" },
            react_1.default.createElement("h2", null, "What's happening"),
            react_1.default.createElement(react_twitter_embed_1.TwitterTweetEmbed, { tweetId: "858551177860055040" }),
            react_1.default.createElement(react_twitter_embed_1.TwitterTimelineEmbed, { sourceType: "profile", screenName: "cleverqazi", options: { height: 400 } }),
            react_1.default.createElement(react_twitter_embed_1.TwitterShareButton, { url: "https://facebook.com/cleverprogrammer", options: { text: "#reactjs is awesome", via: "cleverqazi" } }))));
}
exports.default = Widgets;
