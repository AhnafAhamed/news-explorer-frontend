import "./Navigation.css";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import signout from "../../images/signout.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation({ onMenuClick, onCloseClick, onSignInClick, isLoggedIn, onSignOutClick }) {
  console.log(isLoggedIn);
  const route = useLocation();
  return (
    <nav className={`navigation ${route.pathname === "/saved-news" ? "navigation_dark" : ""}  `}>
      <NavLink
        to="/"
        className={`navigation__item  navigation__item_home  ${route.pathname === "/" ? "navigation__item_active" : ""}`}
      >
        Home
      </NavLink>

      {isLoggedIn ? (
        <NavLink
          to="/saved-news"
          className={`navigation__item navigation__item_article ${route.pathname === "/saved-news" ? "navigation__item_active" : ""}`}
        >
          Saved Articles
        </NavLink>
      ) : (
        ""
      )}

      {!isLoggedIn ? (
        <p
          className="navigation__item navigation__item_signin"
          onClick={onSignInClick}
        >
          Sign in
        </p>
      ) : (
        <button className="navigation__item navigation__item_signout" onClick={onSignOutClick}>
          <p className="navigation__item_signout-text">Elise</p> <img  className="navigation__item_signout-image" src={signout} alt="" />
        </button>
      )}

      <img
        src={menu}
        onClick={onMenuClick}
        alt="menu"
        className={`navigation__item navigation__menu-mobile ${
          route.pathname === "/saved-news"
            ? "navigation__menu-mobile_black"
            : ""
        } `}
      />

      <img
        src={close}
        onClick={onCloseClick}
        alt="close"
        className="navigation__close-mobile"
      />
    </nav>
  );
}

export default Navigation;
