import "./Navigation.css";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation({ onMenuClick, onCloseClick, onSignInClick, isLoggedIn }) {
  const route = useLocation();
  return (
    <nav className="navigation ">
      <NavLink
        to="/"
        className="navigation__item  navigation__item_home navigation__item_active"
      >
        Home
      </NavLink>
      <NavLink
        to="/savednews"
        className="navigation__item navigation__item_article"
      >
        Saved Articles
      </NavLink>
      <p
        className="navigation__item navigation__item_signin"
        onClick={onSignInClick}
      >
        Sign in
      </p>
      <p className="navigation__item navigation__item_signout">Sign Out</p>
      <img
        src={menu}
        onClick={onMenuClick}
        alt="menu"
        className={`navigation__item navigation__menu-mobile ${route.pathname === "/savednews" ? 'navigation__menu-mobile_black' : 'g' } `}
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
