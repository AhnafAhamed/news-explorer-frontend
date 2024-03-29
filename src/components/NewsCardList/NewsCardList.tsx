import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useArticlesProvider } from "../../contexts/ArticlesContext";
import mainApi from "../../utils/MainApi";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

type NewsCardTypes = Array<{
  url: string;
  articleId: string;
  publishedAt: string;
  description: string;
  title: string;
  text: string;
  date: string;
  link: string;
  image: string;
  urlToImage: string;
  source: {
    name: string;
  };
  handleBookmarkClick: () => void;
}>
  


type NewsCardListProps = {
  isLoggedIn: boolean;
  newsCards: NewsCardTypes
  keyword: string;
}

function NewsCardList({ isLoggedIn, newsCards, keyword }: NewsCardListProps) {
  const route = useLocation();
  const { getArticles } = useArticlesProvider();
  const { articles } = useArticlesProvider();
  const [postsCount, setPostsCount] = useState(3);
  let postsToShow = newsCards.slice(0, postsCount);

  function handleShowMorePosts() {
    setPostsCount(postsCount + 3);
  }

  function handleBookmarkClick(
    title: string,
    text: string,
    date: string,
    source: string,
    link: string,
    image: string
  ) {
    if (isLoggedIn) {
      getArticles();
      const checkIfArticleExists = articles?.some(
        (article: { title: string; }) => article.title === title
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
            getArticles()
          })
      } else {

        const articleToDelete = articles.find(
          (item: { title: string }) => item.title === title
        );
        
        mainApi
        // @ts-ignore-next-line
          .deleteArticle(articleToDelete._id)
          .then((data) => {
            console.log({deletedData: data});
          })
          .catch((error) => {
            console.log(error);
          }).finally(() => {
            getArticles()
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
            isSaved={articles?.some(
              (savedArticle: { title: string; }) => savedArticle.title === newsCard.title
            )}
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
