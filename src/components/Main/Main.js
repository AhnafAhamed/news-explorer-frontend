import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import SavedNews from "../SavedNews/SavedNews";

function Main() {
    return (
        <div className="main">
            <Hero/>
            <SavedNews/>
            <SearchResults/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Main;