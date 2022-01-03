import "./Footer.css";
import fbIcon from "../../images/fb.svg";
import githubIcon from "../../images/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyrights">© 2021 Supersite, Powered by News API</p>
            <div className="footer__navigation">
                <p className="footer__link">Home</p>
                <p className="footer__link">Practicum by Yandex</p>
                <div className="footer__social-links">
                    <img src={githubIcon} alt="" className="footer__social-link" />
                    <img src={fbIcon} alt="" className="footer__social-link" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;