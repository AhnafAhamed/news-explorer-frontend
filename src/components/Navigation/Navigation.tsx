import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const signout = require("../../images/signout.svg").default as string;
const close = require("../../images/close.svg").default as string;
const menu = require("../../images/menu.svg").default as string;

type NavigationProps = {
  onMenuClick: () => void;
  onCloseClick: () => void;
  onSignInClick: () => void;
  isLoggedIn: boolean;
  onSignOutClick: () => void;
  userName: string;
};

function Navigation({ onMenuClick, onCloseClick, onSignInClick, isLoggedIn, onSignOutClick, userName }: NavigationProps) {
  
  const route = useLocation();
  
  return (
    <nav className={`navigation ${route.pathname === "/saved-news" ? "navigation_dark" : ""}  `}>
      <NavLink
        to="/"
        className={`navigation__item  navigation__item-home  ${route.pathname === "/" ? "navigation__item_active" : ""}`}
      >
        Home
      </NavLink>

      {isLoggedIn ? (
        <NavLink
          to="/saved-news"
          className={`navigation__item navigation__item-article ${route.pathname === "/saved-news" ? "navigation__item_active" : ""}`}
        >
          Saved Articles
        </NavLink>
      ) : (
        ""
      )}

      {!isLoggedIn ? (
        <p
          className="navigation__item navigation__item-signin"
          onClick={onSignInClick}
        >
          Sign in
        </p>
      ) : (
        <button className="navigation__item navigation__item-signout" onClick={onSignOutClick}>
          <p className="navigation__item-signout-text">{userName}</p> <img  className="navigation__item-signout-image" src={signout} alt="" />
        </button>
      )}

      <img
        src={menu}
        onClick={onMenuClick}
        alt="menu"
        className={`navigation__item navigation__item-hamburger ${
          route.pathname === "/saved-news"
            ? "navigation__item-hamburger_black"
            : ""
        } `}
      />

      <img
        src={close}
        onClick={onCloseClick}
        alt="close"
        className="navigation__item-close-icon"
      />
    </nav>
  );
}

export default Navigation;
