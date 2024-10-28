import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { username, name, phone, email, website, company } = user;
  console.log(user);
  return (
    <div>
      <h2>Details About User: {name}</h2>

      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <p>Company: {company.name}</p>
    </div>
  );
};

export default UserDetails;
