import React, { useEffect, useState } from "react";
import TweetCard from "../TweetCard/TweetCard";
import Post from "../Post/Post";
import "./Feed.css";
import { Posts } from "../../fakePosts.d";

const Feed = () => {
  let allPosts = Posts;
  const [posts, setPosts] = useState(allPosts);

  useEffect(() => {
    setTimeout(()=>{
      setPosts([...Posts])
    },5000)
    

    console.log(Posts, "feeds post");
  },[posts]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetCard></TweetCard>

      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
