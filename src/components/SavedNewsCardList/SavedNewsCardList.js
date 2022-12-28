import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ isLoggedIn }) {
  const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  function getArticles() {
    mainApi
      .getArticles()
      .then((data) => {
        setNewsCards(data);
        console.log({ data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function handleDeleteClick(id) {
    mainApi.deleteArticle(id).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      getArticles();
    })
  }
  return (
    <div className="saved-news-card-list">
      {newsCards.map((newsCard, index) => (
        <NewsCard
          key={index}
          savedArticles={newsCard}
          image={newsCard.image}
          source={newsCard.source}
          date={newsCard.date}
          title={newsCard.title}
          text={newsCard.text}
          isLoggedIn={isLoggedIn}
          keyword={newsCard.keyword}
          articleId={newsCard._id}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
}

export default SavedNewsCardList;
