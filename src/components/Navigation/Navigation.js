import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <p className="navigation__item navigation__item-active">Home</p>
            <p className="navigation__item ">Saved Articles</p>
            <p className="navigation__item navigation__item_signin">Sign in</p>
            {/* <p className="navigation__item navigation__item_signout">Sign Out</p> */}
        </nav>
    )
}

export default Navigation;