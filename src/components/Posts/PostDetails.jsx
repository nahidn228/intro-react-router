import { useLoaderData, useNavigate } from "react-router-dom";
const PostDetails = () => {
  const post = useLoaderData();
  const { id, body, title } = post;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>Post Of id: {id}</h4>
      <p> {title} </p>
      <p> {body} </p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
