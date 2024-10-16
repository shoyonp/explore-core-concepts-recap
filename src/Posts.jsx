import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="">
      <h3>Posts: {posts.length}</h3>
      {
        posts.map(post => <Post post={post}></Post>)
      }
    </div>
  );
}

// 1. creat to state to store the data
// 2. creat use effet with no dependencies
// 3. ues fetch to load data
