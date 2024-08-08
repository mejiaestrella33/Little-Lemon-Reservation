import "../ComponentCSS/nav.css";
function Nav() {
  return (
    <nav>
      <ul className="navBar">
        <a>Home</a>
        <a>About</a>
        <a>Menu</a>
        <a>Reservations</a>
        <a>Order Online</a>
        <a>Login</a>
      </ul>
    </nav>
  );
}

export default Nav;
