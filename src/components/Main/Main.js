import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Main() {
  return (
    <div className="main">
      <Hero />
      <PopupWithForm
        title="Sign in"
        label="email"
        inputType="email"
        inputPlaceholder="email"
        buttonText="Sign in"
        redirectText="Sign up"
      />
      <SavedNews />
      <SearchResults />
      <About />
      <Footer />
    </div>
  );
}

export default Main;
