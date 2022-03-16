"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const fakePosts_d_1 = require("../../fakePosts.d");
require("./TweetCard.css");
function TweetCard() {
    const [tweetMessage, setTweetMessage] = (0, react_1.useState)("");
    const [tweetImage, setTweetImage] = (0, react_1.useState)("");
    const [posts, setPosts] = (0, react_1.useState)(fakePosts_d_1.Posts);
    const sendTweet = (e) => {
        e.preventDefault();
        fakePosts_d_1.Posts.push({
            displayName: "abolfazl",
            username: "abolfazl-legion",
            verified: true,
            text: tweetMessage,
            image: tweetImage
        });
        console.log("send tweet", fakePosts_d_1.Posts);
        setTweetMessage("");
        setTweetImage("");
        setPosts(fakePosts_d_1.Posts);
        return posts;
    };
    return (react_1.default.createElement("div", { className: "tweetCard" },
        react_1.default.createElement("form", null,
            react_1.default.createElement("div", { className: "tweetCard__input" },
                react_1.default.createElement(core_1.Avatar, { src: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" }),
                react_1.default.createElement("input", { onChange: (e) => setTweetMessage(e.target.value), value: tweetMessage, placeholder: "What's happening?", type: "text" })),
            react_1.default.createElement("input", { value: tweetImage, onChange: (e) => setTweetImage(e.target.value), className: "TweetCard__imageInput", placeholder: "Optional: Enter image URL", type: "text" }),
            react_1.default.createElement(core_1.Button, { onClick: sendTweet, type: "submit", className: "TweetCard__tweetButton" }, "Tweet"))));
}
exports.default = TweetCard;
