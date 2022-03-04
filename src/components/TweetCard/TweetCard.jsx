import React, { useState } from "react";
import "./TweetCard.css";
import { Avatar, Button } from "@material-ui/core";

function TweetCard() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [post, setPost] = useState({
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
  });
  const sendTweet = (e) => {
    e.preventDefault();

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetCard">
      <form>
        <div className="tweetCard__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="TweetCard__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="TweetCard__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetCard;
