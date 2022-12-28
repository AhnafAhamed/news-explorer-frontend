import "./NewsCard.css";
import { useLocation } from "react-router-dom";

function NewsCard({
  isLoggedIn,
  articleId,
  image,
  source,
  link,
  date,
  title,
  text,
  keyword,
  savedArticles,
  isSaved,
  handleBookmarkClick,
  handleDeleteClick,
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
          <p className="news-card__tag">{keyword}</p>
        ) : (
          ""
        )}
        {route.pathname === "/" ? (
          <button
            className={`news-card__icon news-card__icon-bookmark ${
              isSaved ? "news-card__icon-bookmark_saved" : ""
            }`}
            onClick={() => handleBookmarkClick(title, text, date, source, link, image)}
          ></button>
        ) : (
          <button
            className="news-card__icon news-card__icon-delete"
            onClick={() => handleDeleteClick(articleId)}
          ></button>
        )}
        {route.pathname === "/saved-news" ? (
          <p className="news-card__delete-prompt">Remove from saved</p>
        ) : (
          ""
        )}
        {route.pathname === "/" && !isLoggedIn ? (
          <p className="news-card__save-prompt">Sign in to save articles</p>
        ) : (
          ""
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
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
