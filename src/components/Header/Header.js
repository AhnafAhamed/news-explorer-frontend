import Navigation from "../Navigation/Navigation";
import './Header.css'

function Header () {
    return (
        <div className="header header_mobile">
            <p className="header__logo">NewsExplorer</p>
            <Navigation/>
        </div>
        
    )
}

export default Header;