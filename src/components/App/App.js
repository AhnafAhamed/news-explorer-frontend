import { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import newsApi from "../../utils/NewsApi";
import About from "../About/About";
import Footer from "../Footer/Footer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import SavedNewsData from "../../data/SavedNews.json";

import "./App.css";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date().toLocaleDateString();
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 7);

  function handleSearch({ keyword }) {
    setSearchData({});
    setIsLoading(true);
    newsApi
      .searchKeyword(keyword, pastDate.toLocaleDateString(), today)
      .then((data) => {
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignInClick() {
    setIsSignInPopupOpen(true);
    setIsLoggedIn(true);
  }

  function handleSignOutClick() {
    setIsLoggedIn(false);
    setIsSuccessPopupOpen(true);
  }

  function handleCloseButtonClick() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSuccessPopupOpen(false);
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
      setIsSuccessPopupOpen(false);
    }
  }

  function handleCloseOnEscClick(e) {
    if (e.key === "Escape") {
      setIsSignUpPopupOpen(false);
      setIsSignInPopupOpen(false);
      setIsSuccessPopupOpen(false);
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
            <Hero
              onSignOutClick={handleSignOutClick}
              isLoggedIn={isLoggedIn}
              onSignInClick={handleSignInClick}
            >
              <SearchForm onSearch={handleSearch} />
            </Hero>

            {searchData.status === "ok" ? (
              <SearchResults
                newsCards={searchData.articles}
                isLoggedIn={isLoggedIn}
              />
            ) : (
              ""
            )}
            {isLoading ? <Preloader /> : ""}

            <About />
            <Footer />
          </Route>
          <Route path="/saved-news">
            <Header
              onSignOutClick={handleSignOutClick}
              isLoggedIn={isLoggedIn}
              onSignInClick={handleSignInClick}
            />
            <SavedNews savedNewsCards={SavedNewsData.articles} isLoggedIn={isLoggedIn} />
            <Footer />
          </Route>
        </Switch>
      </Main>
      <Popup
        popupName="success"
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        isOpen={isSuccessPopupOpen}
        title="Registration successfully completed!"
      >
        <p className="popup_type_success-text" onClick={handleSignInClick}>Sign in</p>
      </Popup>
      <PopupWithForm
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        onRedirectClick={handleSignUpRedirect}
        isOpen={isSignInPopupOpen}
        popupName="signin"
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
        popupName="signup"
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
