import { useState } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import FormInput from "../FormInput/FormInput";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SavedNews from "../SavedNews/SavedNews";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleSignInClick() {
    setIsPopupOpen(true);
  }

  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  return (
    <div className="App">
      <Main>
        <Hero onSignInClick={handleSignInClick} />
        <SavedNews />
        <SearchResults />
        <About />
        <Footer />
      </Main>
      <PopupWithForm
        isOpen={isPopupOpen}
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

export default App;
