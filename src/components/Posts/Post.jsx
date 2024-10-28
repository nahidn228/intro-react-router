/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, body, title } = post;
  const navigate = useNavigate();
  //console.log(post);
  const handleShowDetail = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div>
      <h4>Post Of id: {id}</h4>
      <p> {title} </p>

      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>

      <button onClick={handleShowDetail}>Click to see details</button>

      <p> {body} </p>
    </div>
  );
};

export default Post;
