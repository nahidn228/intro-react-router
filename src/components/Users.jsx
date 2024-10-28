import { useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Users Component {users.length}</h2>
      <p>our nomro vodro users</p>

      <div>
        {users.map((user, idx) => (
          <User key={idx} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
