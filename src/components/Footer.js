import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/Fresh N Go - Menu.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>258 E 2nd Ave,</li>
            <li>California</li>
            <br></br>
            <li>(442)-256-2305</li>
            <br></br>
            <a
              href="mailto: freshngo.official@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              freshngo.official@gmail.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/freshngo.official"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/official.freshngo/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
