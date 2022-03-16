export const Posts =
  [{
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: "text 1",
    image: "tweetImage",
  }, {
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl-legion",
    verified: true,
    text: "text 2",
    image: "tweetImage",
  }, {
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: "text 3",
    image: "tweetImage",
  }, {
    
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis?",
    image: "tweetImage",
  }, {
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis?",
    image: "tweetImage",
  }, {
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis?",
    image: "tweetImage",
  }, {
    displayName: "abolfazl naser ranjbar",
    username: "Abolfazl",
    verified: true,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis?",
    image: "tweetImage",
  }]
export function getPosts() {
  return Posts;
}

export function getPost(username) {
  return Posts.find(m => m.username === username);
}

export function savePost(post) {
  let allPosts = Posts.find(m => m.post === post.username) || {};
  allPosts.name = post.name;
  allPosts.text = post.text;
  allPosts.image = post.image;

  if (!allPosts._id) {
    allPosts._id = Date.now();
    Posts.push(allPosts);
  }

  return postInDb;
}
