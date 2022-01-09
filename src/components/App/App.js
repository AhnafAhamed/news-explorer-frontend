import About from "../About/About";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Main>
        <Hero />
        <SavedNews />
        <SearchResults />
        <About />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
