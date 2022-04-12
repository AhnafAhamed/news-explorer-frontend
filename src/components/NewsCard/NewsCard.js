import "./NewsCard.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";

function NewsCard({
  isLoggedIn,
  image,
  source,
  link,
  date,
  title,
  text,
  keyword,
  savedArticles,
}) {
  const route = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [newSavedArticles, setNewSavedArticles] = useState([]);

  useEffect(() => {
    isArticleSaved()
  })

  function getNewArticles() {
    mainApi.getArticles().then((data) => {
      setNewSavedArticles(data)
    })
  }
  
  function parseDate(input) {
    return new Date(input);
  }

  function isArticleSaved() {
    const savedArticle = newSavedArticles.some((item) => item.title === title);
    if (savedArticle) {
      setIsSaved(true);
    }
  }

  function handleBookmarkClick() {
    if(isLoggedIn){
      const checkIfArticleExists = newSavedArticles.some(
        (article) => article.title === title
      );
      console.log(checkIfArticleExists);
      if (!checkIfArticleExists) {
        mainApi
          .saveArticle({
            keyword: keyword,
            title: title,
            text: text,
            date: date,
            source: source,
            link: link,
            image: image,
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        handleDeleteClick();
      }
    }
  }
 

  function handleDeleteClick() {
    getNewArticles()
    const articleToDelete = savedArticles.find((item) => item.title === title);
    console.log({articleToDelete})
    mainApi.deleteArticle(articleToDelete._id).then((data) => {
      console.log(data)
    })
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
            onClick={handleBookmarkClick}
          ></button>
        ) : (
          <button
            className="news-card__icon news-card__icon-delete"
            onClick={handleDeleteClick}
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
