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
require("./Post.css");
const core_1 = require("@material-ui/core");
const VerifiedUser_1 = __importDefault(require("@material-ui/icons/VerifiedUser"));
const ChatBubbleOutline_1 = __importDefault(require("@material-ui/icons/ChatBubbleOutline"));
const Repeat_1 = __importDefault(require("@material-ui/icons/Repeat"));
const FavoriteBorder_1 = __importDefault(require("@material-ui/icons/FavoriteBorder"));
const Publish_1 = __importDefault(require("@material-ui/icons/Publish"));
const Post = (0, react_1.forwardRef)(({ displayName, username, verified, text, image, avatar }, ref) => {
    return (react_1.default.createElement("div", { className: "post", ref: ref },
        react_1.default.createElement("div", { className: "post__avatar" },
            react_1.default.createElement(core_1.Avatar, { src: avatar })),
        react_1.default.createElement("div", { className: "post__body" },
            react_1.default.createElement("div", { className: "post__header" },
                react_1.default.createElement("div", { className: "post__headerText" },
                    react_1.default.createElement("h3", null,
                        displayName,
                        " ",
                        react_1.default.createElement("span", { className: "post__headerSpecial" },
                            verified && react_1.default.createElement(VerifiedUser_1.default, { className: "post__badge" }),
                            " @",
                            username))),
                react_1.default.createElement("div", { className: "post__headerDescription" },
                    react_1.default.createElement("p", null, text))),
            react_1.default.createElement("img", { src: image, alt: "" }),
            react_1.default.createElement("div", { className: "post__footer" },
                react_1.default.createElement(ChatBubbleOutline_1.default, { fontSize: "small" }),
                react_1.default.createElement(Repeat_1.default, { fontSize: "small" }),
                react_1.default.createElement(FavoriteBorder_1.default, { fontSize: "small" }),
                react_1.default.createElement(Publish_1.default, { fontSize: "small" })))));
});
exports.default = Post;
