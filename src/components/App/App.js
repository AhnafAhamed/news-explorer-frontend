import { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SavedNews from "../SavedNews/SavedNews";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSignInClick() {
    setIsSignInPopupOpen(true);
  }

  function handleCloseButtonClick() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  }

  function handleSignUpRedirect() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(true);
  }

  function handleSignInRedirect() {
    setIsSignUpPopupOpen(false);
    setIsSignInPopupOpen(true);
  }

  function handleCloseOnOverlayClick(e) {
    if (e.target.classList.contains("popup_open")) {
      setIsSignUpPopupOpen(false);
      setIsSignInPopupOpen(false);
    }
  }

  function handleCloseOnEscClick(e) {
    if (e.key === "Escape") {
      setIsSignUpPopupOpen(false);
      setIsSignInPopupOpen(false);
    }
  }

  document.addEventListener("keydown", handleCloseOnEscClick);

  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  return (
    <div className="App">
      <Main>
        <Switch>
          <Route exact path="/">
            <Hero onSignInClick={handleSignInClick} />
            <SearchResults />
            <About />
            <Footer />
          </Route>
          <Route path="/saved-news">
            <Header isLoggedIn={isLoggedIn} onSignInClick={handleSignInClick} />
            <SavedNews />
          </Route>
        </Switch>
      </Main>
      <PopupWithForm
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        onRedirectClick={handleSignUpRedirect}
        isOpen={isSignInPopupOpen}
        formName="signin"
        title="Sign in"
        buttonText="Sign in"
        initialValues={initialValues}
        redirectText="Sign up"
      >
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
        />
      </PopupWithForm>

      <PopupWithForm
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        onRedirectClick={handleSignInRedirect}
        isOpen={isSignUpPopupOpen}
        formName="signup"
        title="Sign up"
        buttonText="Sign up"
        initialValues={initialValues}
        redirectText="Sign in"
      >
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
        />
        <FormInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter username"
        />
      </PopupWithForm>
    </div>
  );
}

export default withRouter(App);
