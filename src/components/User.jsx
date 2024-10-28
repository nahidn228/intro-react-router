/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, username, name, phone, website } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>Id: {id}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>

      <Link to={`/user/${id}`}>Show Details</Link>

      <p>Website: {website}</p>
    </div>
  );
};

export default User;
