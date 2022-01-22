import { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import newsApi from "../../utils/NewsApi";
import About from "../About/About";
import Footer from "../Footer/Footer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedNews, setSavedNews] = useState([]);

  const today = new Date().toLocaleDateString();
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 7);

  function handleSearch({ keyword }) {
    setIsLoading(true);
    setSearchData({});
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
    setSavedNews([]);
  }

  function handleSignOutClick() {
    setIsLoggedIn(false);
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
            <SavedNews savedNewsCards={savedNews} isLoggedIn={isLoggedIn}/>
            <Footer />
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
