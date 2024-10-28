import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="./users"> Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a> */}
      </nav>
    </div>
  );
};

export default Header;
