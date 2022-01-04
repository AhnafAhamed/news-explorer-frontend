import './Navigation.css';
import menu from '../../images/menu.svg';
import close from '../../images/close.svg';

function Navigation() {
    return (
        <nav className="navigation navigation_mobile">
            <p className="navigation__item  navigation__item_home navigation__item_active">Home</p>
            <p className="navigation__item navigation__item_article">Saved Articles</p>
            <p className="navigation__item navigation__item_signin">Sign in</p>
            <p className="navigation__item navigation__item_signout">Sign Out</p>
            <img src={menu} alt="menu" className="navigation__item navigation__menu-mobile" />
            <img src={close} alt="menu" className="navigation__close-mobile" />
        </nav>
    )
}

export default Navigation;