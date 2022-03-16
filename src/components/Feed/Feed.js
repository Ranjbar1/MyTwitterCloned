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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TweetCard_1 = __importDefault(require("../TweetCard/TweetCard"));
const Post_1 = __importDefault(require("../Post/Post"));
require("./Feed.css");
const fakePosts_d_1 = require("../../fakePosts.d");
const Feed = () => {
    let allPosts = fakePosts_d_1.Posts;
    const [posts, setPosts] = (0, react_1.useState)(allPosts);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setPosts([...fakePosts_d_1.Posts]);
        }, 5000);
        console.log(fakePosts_d_1.Posts, "feeds post");
    }, [posts]);
    return (react_1.default.createElement("div", { className: "feed" },
        react_1.default.createElement("div", { className: "feed__header" },
            react_1.default.createElement("h2", null, "Home")),
        react_1.default.createElement(TweetCard_1.default, null),
        posts.map((post) => (react_1.default.createElement(Post_1.default, { key: post.text, displayName: post.displayName, username: post.username, verified: post.verified, text: post.text, avatar: post.avatar, image: post.image })))));
};
exports.default = Feed;
