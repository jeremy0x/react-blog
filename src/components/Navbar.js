import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="nav">
      <div className="nav__left">
        <img src={logo} alt="react logo" className="logo" title="React logo" />
        <p>My React Blog</p>
      </div>

      <div className="nav__links">
        <Link to="/" title="Go to homepage">Home</Link>
        <Link to="/create" title="Create a new blog">New blog</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
