import './Navigation.css';
import menu from '../../images/menu.svg';

function Navigation() {
    return (
        <nav className="navigation">
            <p className="navigation__item  navigation__item_home navigation__item_active">Home</p>
            <p className="navigation__item navigation__item_article">Saved Articles</p>
            <p className="navigation__item navigation__item_signin">Sign in</p>
            <p className="navigation__item navigation__item_signout">Sign Out</p>
            <img src={menu} alt="menu" className="navigation__menu-mobile" />
        </nav>
    )
}

export default Navigation;