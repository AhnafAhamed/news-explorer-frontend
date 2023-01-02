import { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import newsApi from "../../utils/NewsApi";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import AuthApi from "../../utils/AuthorizationApi";

import "./App.css";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import mainApi from "../../utils/MainApi";
import { ArticlesProvider } from "../../contexts/ArticlesContext";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [userName, setUserName] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyword] = useState("");

  const today = new Date().toLocaleDateString();
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 7);

  function handleSearch({ keyword }) {
    setIsLoading(true);
    setKeyword(keyword);
    setSearchData({});
    newsApi
      .searchKeyword(keyword, pastDate.toLocaleDateString(), today)
      .then((data) => {
        setSearchData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUserRegistration({ name, email, password }) {
    if (!name || !email || !password) {
      return;
    }
    AuthApi.registerUser({ name, email, password })
      .then((res) => {
        if (res) {
          setIsSuccessPopupOpen(true);
          setIsSignUpPopupOpen(false);
        }
      })
      .catch(() => {
        setIsRegistrationError(true);
        setTimeout(() => {
          setIsRegistrationError(false);
        }, 3000);
      });
  }

  function handleUserLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    AuthApi.authorizeUser({ email, password })
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          setIsSignInPopupOpen(false);
        }
      })
      .catch(() => {
        setIsLoginError(true);
        setTimeout(() => {
          setIsLoginError(false);
        }, 3000);
      });
  }

  function handleSignInClick() {
    setIsSignInPopupOpen(true);
  }

  function handleSignOutClick() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      AuthApi.checkUserToken()
        .then((res) => {
          console.log(res)
          setIsLoggedIn(true);
          setUserName(res.name);
        })
        .then(() => {
          mainApi
            .getArticles()
            .then((data) => {
              setSavedArticles(data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Main>
        <ArticlesProvider>
        <Switch>
          <Route exact path="/">
            <Hero
              onSignOutClick={handleSignOutClick}
              isLoggedIn={isLoggedIn}
              onSignInClick={handleSignInClick}
              userName={userName}
            >
              <SearchForm onSearch={handleSearch} />
            </Hero>

            {searchData.status === "ok" ? (
              <SearchResults
                newsCards={searchData.articles}
                isLoggedIn={isLoggedIn}
                keyword={keyword}
              />
            ) : (
              ""
            )}
            {isLoading ? <Preloader /> : ""}

            <About />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            onSignOutClick={handleSignOutClick}
            isLoggedIn={isLoggedIn}
            onSignInClick={handleSignInClick}
            savedNewsCards={savedArticles}
            userName={userName}
            component={SavedNewsPage}
          />
        </Switch>
        </ArticlesProvider>
      </Main>
      <Popup
        popupName="success"
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        isOpen={isSuccessPopupOpen}
        title="Registration successfully completed!"
      >
        <p className="popup_type_success-text" onClick={handleSignInClick}>
          Sign in
        </p>
      </Popup>
      <RegisterPopup
        isRegistrationError={isRegistrationError}
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        isOpen={isSignUpPopupOpen}
        onRedirectClick={handleSignInRedirect}
        onRegisterUser={handleUserRegistration}
      ></RegisterPopup>
      <LoginPopup
        isLoginError={isLoginError}
        closeOnOverlayClick={handleCloseOnOverlayClick}
        closeButtonClick={handleCloseButtonClick}
        isOpen={isSignInPopupOpen}
        onRedirectClick={handleSignUpRedirect}
        onUserLogin={handleUserLogin}
      ></LoginPopup>
    </div>
  );
}

export default withRouter(App);
