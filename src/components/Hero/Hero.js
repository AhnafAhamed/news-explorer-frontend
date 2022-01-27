import "./Hero.css";
import Header from "../Header/Header";

function Hero({ onSignInClick, isLoggedIn, onSignOutClick, children }) {
  return (
    <div className="hero">
      <Header isLoggedIn={isLoggedIn} onSignOutClick={onSignOutClick} onSignInClick={onSignInClick} />
      <div className="hero__text">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      {children}
    </div>
  );
}

export default Hero;
