import "./Hero.css";
import Header from "../Header/Header";

type HeroProps = {
  onSignInClick: () => void;
  isLoggedIn: boolean;
  onSignOutClick: () => void;
  userName: string;
  children: React.ReactNode;
}

function Hero({ onSignInClick, isLoggedIn, onSignOutClick, children, userName }: HeroProps) {
  return (
    <div className="hero">
      <Header isLoggedIn={isLoggedIn} onSignOutClick={onSignOutClick} onSignInClick={onSignInClick} userName={userName} />
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
