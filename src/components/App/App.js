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
  function hello(e) {
    e.preventDefault();
    console.log("button clicked");
  }
  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  return (
    <div className="App">
      <Main>
        <Hero />
        <SavedNews />
        <SearchResults />
        <About />
        <Footer />
      </Main>
      <PopupWithForm
        title="Sign in"
        buttonText="Sign in"
        initialValues={initialValues}
        redirectText="Sign up"
        formSubmit={hello}
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
        title="Sign up"
        buttonText="Sign up"
        initialValues={initialValues}
        redirectText="Sign in"
        formSubmit={hello}
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
