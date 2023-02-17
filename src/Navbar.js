import { Link } from "react-router-dom";
import "./Navbar.css";
import proto from "./Images/proto.jpg";
function Navbar() {
  return (
    <div className="abc">
      <div className="banner">
        <div className="logo">
          <img src={proto} alt=""/>
        </div>
        <div className="nav">
          <Link className="active" to="/">
            Home
          </Link>
          <Link className="active" to="/aboutus">
            About Us
          </Link>
          <Link className="active" to="/service">
            Services
          </Link>
          <Link className="active" to="/contactus">
            Contact us
          </Link>
          <button onClick="click">Let' Meet </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
