import "./Footer.css";
import { NavLink } from "react-router-dom";

const githubIcon = require("../../images/github.svg").default as string;

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrights">
        © 2021 News Explorer, Powered by News API
      </p>
      <nav className="footer__navigation">
        <div className="footer__links">
          <NavLink to="/" className="footer__link">
            Home
          </NavLink>
        </div>
        <div className="footer__social-links">
          <a
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AhnafAhamed/news-explorer-frontend"
          >
            <img src={githubIcon} alt="github" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
