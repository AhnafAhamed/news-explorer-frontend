import Navigation from "../Navigation/Navigation";
import './Header.css'

function Header () {
    return (
        <div className="header">
            <p className="header_logo">NewsExplorer</p>
            <Navigation/>
        </div>
        
    )
}

export default Header;