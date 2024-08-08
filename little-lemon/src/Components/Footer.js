import "../ComponentCSS/footer.css";
import LLLogo from "../icons_assets/Logo.svg";
function Footer() {
  return (
    <footer>
      <ul className="Footer_Section">
        <img alt="Lemon Logo" className="Logo" src={LLLogo}></img>
        <ul className="Navigation">
          <h4>Navigation</h4>
          <a>Home</a>
          <a>About</a>
          <a>Menu</a>
          <a>Reservations</a>
          <a>Order Online</a>
          <a>Login</a>
        </ul>
        <ul className="Contact">
          <h4>Contact</h4>
          <a>Address</a>
          <a>phone number</a>
          <a>email</a>
        </ul>
        <ul className="SocialMedia">
          <h4>Social Media Links</h4>
          <a>Address</a>
          <a>phone number</a>
          <a>email</a>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
