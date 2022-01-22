import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ savedNewsCards, isLoggedIn }) {
  return (
    <div className="saved-news-card-list">
      {savedNewsCards.map((savedNewsCard, index) => (
        <NewsCard
          key={index}
          image={savedNewsCard.urlToImage}
          source={savedNewsCard.source.name}
          date={savedNewsCard.publishedAt}
          title={savedNewsCard.title}
          description={savedNewsCard.description}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </div>
  );
}

export default SavedNewsCardList;
