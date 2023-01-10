import Navigation from "../Navigation/Navigation";
import "./Header.css";

type HeaderProps = {
  onSignInClick: () => void;
  isLoggedIn: boolean;
  onSignOutClick: () => void;
  userName: string;
};

function Header({ onSignInClick, isLoggedIn, onSignOutClick, userName }: HeaderProps) {
  function handleMenuClick() {
    document.querySelector(".navigation")!.classList.add("navigation_mobile");
    document.querySelector(".header")!.classList.add("header_mobile");
  }

  function handleCloseClick() {
    document.querySelector(".navigation")!.classList.remove("navigation_mobile");
    document.querySelector(".header")!.classList.remove("header_mobile");
  }

  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation
      userName={userName}
        onSignOutClick={onSignOutClick}
        isLoggedIn={isLoggedIn}
        onMenuClick={handleMenuClick}
        onCloseClick={handleCloseClick}
        onSignInClick={onSignInClick}
      />
    </header>
  );
}

export default Header;
