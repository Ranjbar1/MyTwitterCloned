import React, { useState } from "react";
import TweetCard from "../TweetCard/TweetCard";
import Post from "../Post/Post";
import "./Feed.css";
import {getPosts, getPost,savePost} from "../../fakePosts";


const  Feed=(props)=> {
let allPosts = getPosts()




      const [posts, setPosts] = useState(allPosts);
      
      return (
        <div className="feed">
          <div className="feed__header">
            <h2>Home</h2>
          </div>

        <TweetCard sendTweet={(e)=>setPosts(savePost(e))}></TweetCard>

          
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
        }

export default Feed;
