import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const postsPerPage = 3;
let arrayForHoldingPosts = [];

function NewsCardList({ isLoggedIn, newsCards }) {
  const route = useLocation();

  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = useCallback((start, end) => {
    const slicedPosts = newsCards.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  }, [newsCards]);

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, [loopWithSlice]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

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
            description={newsCard.description}
            isLoggedIn={isLoggedIn}
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
