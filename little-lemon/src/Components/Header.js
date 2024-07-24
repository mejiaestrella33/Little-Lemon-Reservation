import logo from "../Logo .svg";
import Nav from "./Nav";
import "../ComponentCSS/header.css";

function Header() {
  return (
    <header>
      <img alt="Little Lemon logo" src={logo}></img>
      <Nav />
    </header>
  );
}

export default Header;
