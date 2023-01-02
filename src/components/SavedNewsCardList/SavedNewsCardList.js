import { useEffect } from "react";
import mainApi from "../../utils/MainApi";
import NewsCard from "../NewsCard/NewsCard";
import { useArticlesProvider } from "../../contexts/ArticlesContext";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ isLoggedIn }) {
  const { getArticles, articles } = useArticlesProvider();
  
  useEffect(() => {
    getArticles()
  }, []);
  
  function handleDeleteClick(id) {
    mainApi.deleteArticle(id).then((data) => {
      console.log({deletedData: data});
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      getArticles();
    })
  }
  return (
    <div className="saved-news-card-list">
      {articles.map((newsCard, index) => (
        <NewsCard
          key={index}
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
