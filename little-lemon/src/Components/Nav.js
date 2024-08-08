import "../ComponentCSS/nav.css";
import BookingPage from "../Components/BookingPage";
import HomePage from "../App";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="navBar">
        <Link to="/">Home</Link>
        <a>About</a>
        <a>Menu</a>
        <a>Order Online</a>
        <a>Login</a>
      </ul>
    </nav>
  );
}

export default Nav;
