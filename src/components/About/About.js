import "./About.css";
import bookIcon from "../../images/book.png";
import searchIcon from "../../images/searching.png";
import profileIcon from "../../images/profile.png";

function About() {
  return (
    <div className="about">
      <div className="about__box">
        <img className="about__img" src={searchIcon} alt="about" />
        <h1 className="about__title">Search for News Articles</h1>
        <p className="about__text">
          With News Explorer, you can search for news articles on a wide range
          of topics. Simply enter a search term in the search bar and browse
          through the results. Whether you're interested in the latest political
          developments, sports updates, or tech news, you'll find it all on News
          Explorer.
        </p>
      </div>
      <div className="about__box">
        <img className="about__img" src={bookIcon} alt="about" />
        <h1 className="about__title">Save Favorite Articles</h1>
        <p className="about__text">
          Found an article that you want to reference later? With News Explorer,
          you can save your favorite articles for easy access. Simply click the
          "Save" button on the article page, and it will be added to your list
          of saved articles. You can access your saved articles at any time by
          clicking on the "Saved Articles" tab in the navigation bar.
        </p>
      </div>
      <div className="about__box">
        <img className="about__img" src={profileIcon} alt="about" />
        <h1 className="about__title">Create an Account</h1>
        <p className="about__text">
          Want to save your favorite articles and access them from any device?
          Simply create an account on News Explorer and you'll be able to do
          just that. With an account, you can save articles and access them from
          any computer or mobile device with an internet connection. Simply
          click on the "Sign Up" button in the top right corner of the home page
          to create your account.
        </p>
      </div>
    </div>
  );
}

export default About;
