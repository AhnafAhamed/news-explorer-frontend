import { useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";



function NewsCardList({ isLoggedIn, newsCards, keyword }) {
  const route = useLocation();
  const [postsCount, setPostsCount] = useState(3);
  let postsToShow = newsCards.slice(0,postsCount);
  
  function handleShowMorePosts() {
    setPostsCount(postsCount+3)
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
          />
        ))}
      </ul>
      {route.pathname === "/" && postsToShow.length !== newsCards.length ? (
        <button onClick={handleShowMorePosts} className="news-card-list__button">
          Show more
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewsCardList;
