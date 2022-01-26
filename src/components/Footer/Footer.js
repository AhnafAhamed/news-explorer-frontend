import "./Footer.css";
import fbIcon from "../../images/fb.svg";
import githubIcon from "../../images/github.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const route = useLocation();

  return (
    <footer className="footer">
      <p className="footer__copyrights">
        © 2021 Supersite, Powered by News API
      </p>
      <nav className="footer__navigation">
        <div className="footer__links">
          <NavLink to="/" className="footer__link">
            Home
          </NavLink>
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href="https://practicum.yandex.com/"
          >
            Practicum by Yandex
          </a>
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
          <a
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/YPracticum"
          >
            <img src={fbIcon} alt="facebook" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
