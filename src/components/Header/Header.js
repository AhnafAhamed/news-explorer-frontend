import Navigation from "../Navigation/Navigation";
import './Header.css'

function Header () {

    function handleMenuClick() {
        document.querySelector('.navigation').classList.add('navigation_mobile');
        document.querySelector('.header').classList.add('header_mobile');
    }

    function handleCloseClick() {
        document.querySelector('.navigation').classList.remove('navigation_mobile');
        document.querySelector('.header').classList.remove('header_mobile');
    }

    return (
        <div className="header">
            <p className="header__logo">NewsExplorer</p>
            <Navigation onMenuClick={handleMenuClick} onCloseClick={handleCloseClick}/>
        </div>
        
    )
}

export default Header;