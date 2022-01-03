import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <div className="main">
            <Hero/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Main;