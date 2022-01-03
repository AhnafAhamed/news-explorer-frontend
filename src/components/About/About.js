import heroImage from "../../images/about_image.png";
import "./About.css";

function About() {
  return (
    <div className="about">
      <img alt="About" className="about__image" src={heroImage} />
      <div className="about__description">
        <h3 className="about__title">About the author</h3>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.<br/> <br/>You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
