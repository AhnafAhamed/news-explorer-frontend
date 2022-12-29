import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ isLoggedIn, newsCards, keyword, savedArticles }) {
  const route = useLocation();
  const [postsCount, setPostsCount] = useState(3);
  const [newSavedArticles, setNewSavedArticles] = useState();
  let postsToShow = newsCards.slice(0, postsCount);

  function handleShowMorePosts() {
    setPostsCount(postsCount + 3);
  }

  function updateArticlesList() {
    mainApi
      .getArticles()
      .then((data) => {
        setNewSavedArticles(data);
        console.log({ data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => { 
    updateArticlesList();
  }, [keyword]);

  function handleBookmarkClick(
    title,
    text,
    date,
    source,
    link,
    image
  ) {
    if (isLoggedIn) {
      const checkIfArticleExists = newSavedArticles?.some(
        (article) => article.title === title
      );
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
          }).finally(() => {
            updateArticlesList()
          })
      } else {
        const articleToDelete = newSavedArticles.find(
          (item) => item.title === title
        );
        mainApi
          .deleteArticle(articleToDelete._id)
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          }).finally(() => {
            updateArticlesList()
          })
      }
    }
  }

  return (
    <div>
      <ul className="news-card-list">
        {postsToShow.map((newsCard, index) => (
          <NewsCard
            key={index}
            image={newsCard.urlToImage}
            source={newsCard.source.name}
            date={newsCard.publishedAt}
            title={newsCard.title}
            text={newsCard.description}
            link={newsCard.url}
            isLoggedIn={isLoggedIn}
            keyword={keyword}
            articleId={newsCard.articleId}
            isSaved={newSavedArticles?.some(
              (savedArticle) => savedArticle.title === newsCard.title
            )}
            savedArticles={savedArticles}
            handleBookmarkClick={handleBookmarkClick}
          />
        ))}
      </ul>
      {route.pathname === "/" && postsToShow.length !== newsCards.length ? (
        <button
          onClick={handleShowMorePosts}
          className="news-card-list__button"
        >
          Show more
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewsCardList;
