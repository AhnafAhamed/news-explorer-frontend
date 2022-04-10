import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ savedNewsCards, isLoggedIn }) {
  return (
    <div className="saved-news-card-list">
      {savedNewsCards.map((savedNewsCard, index) => (
        <NewsCard
          key={index}
          image={savedNewsCard.image}
          source={savedNewsCard.source}
          date={savedNewsCard.date}
          title={savedNewsCard.title}
          text={savedNewsCard.text}
          isLoggedIn={isLoggedIn}
          keyword={savedNewsCard.keyword}
        />
      ))}
    </div>
  );
}

export default SavedNewsCardList;
