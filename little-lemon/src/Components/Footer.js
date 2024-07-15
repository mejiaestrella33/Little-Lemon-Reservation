import "../ComponentCSS/footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <ul className="Navigation">
          <h4>Doormat Navigation</h4>
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
