import logo from "../Logo .svg";
import "../ComponentCSS/header.css";

function Header() {
  return (
    <header>
      <img alt="Little Lemon logo" src={logo}></img>
    </header>
  );
}

export default Header;
