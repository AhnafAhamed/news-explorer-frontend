import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";

function Main() {
    return (
        <div className="main">
            <Hero/>
            <SearchResults/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Main;