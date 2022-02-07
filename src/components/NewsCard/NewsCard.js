import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({
  isLoggedIn,
  image,
  source,
  date,
  title,
  description,
  category,
}) {
  const route = useLocation();

  function parseDate(input) {
    return new Date(input);
  }

  return (
    <li className="news-card">
      <div className="news-card__image-container">
        <img src={image} alt="" className="news-card__image" />
        {route.pathname === "/saved-news" ? (
          <p className="news-card__tag">{category}</p>
        ) : (
          ""
        )}
        {route.pathname === "/" ? (
          <button className="news-card__icon news-card__icon-bookmark"></button>
        ) : (
          <button className="news-card__icon news-card__icon-delete"></button>
        )}
        {route.pathname === "/saved-news" ? (
          <p className="news-card__delete-prompt">Remove from saved</p>
        ) : (
          <p className="news-card__save-prompt">Sign in to save articles</p>
        )}
      </div>
      <div className="news-card__text">
        <p className="news-card__date">
          {parseDate(date).toLocaleDateString("default", {
            year: "numeric",
            day: "numeric",
            month: "long",
          })}
        </p>
        <h6 className="news-card__heading">{title}</h6>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
