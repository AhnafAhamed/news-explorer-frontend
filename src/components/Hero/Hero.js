import "./Hero.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function Hero({ onSignInClick, isLoggedIn }) {
  return (
    <div className="hero">
      <Header isLoggedIn={isLoggedIn} onSignInClick={onSignInClick} />
      <div className="hero__text">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </div>
  );
}

export default Hero;
