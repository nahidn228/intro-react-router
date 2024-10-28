import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h2>Total Posts: {posts.length}</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} ></Post>
      ))}
    </div>
  );
};

export default Posts;
