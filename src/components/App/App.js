import { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import newsApi from '../../utils/NewsApi';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import SavedNewsData from '../../data/SavedNews.json';
import AuthApi from '../../utils/AuthorizationApi';

import './App.css';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import LoginPopup from '../LoginPopup/LoginPopup';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistrationError, setIsRegistrationError] = useState(false);

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

  function handleUserRegistration({ name, email, password }) {
    if (!name || !email || !password) {
      return;
    }
    AuthApi.registerUser({ name, email, password })
      .then((res) => {
        if (res) {
          setIsSignUpPopupOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrationError(true);
      })
      .finally(() => {
        setIsSuccessPopupOpen(true);
      });
  }

  function handleUserLogin({ email, password }) {
    if (!email || !password ) {
      return;
    }
    AuthApi.authorizeUser({ email, password }) 
    .then((data) => {
      if (data.token) {
        setIsLoggedIn(true);
        setIsSignInPopupOpen(false);
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
    if (e.target.classList.contains('popup_open')) {
      setIsSignUpPopupOpen(false);
      setIsSignInPopupOpen(false);
      setIsSuccessPopupOpen(false);
    }
  }

  function handleCloseOnEscClick(e) {
    if (e.key === 'Escape') {
      setIsSignUpPopupOpen(false);
      setIsSignInPopupOpen(false);
      setIsSuccessPopupOpen(false);
    }
  }

  document.addEventListener('keydown', handleCloseOnEscClick);

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

            {searchData.status === 'ok' ? (
              <SearchResults newsCards={searchData.articles} isLoggedIn={isLoggedIn} />
            ) : (
              ''
            )}
            {isLoading ? <Preloader /> : ''}

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
