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
          description={savedNewsCard.text}
          isLoggedIn={isLoggedIn}
          category={savedNewsCard.keyword}
        />
      ))}
    </div>
  );
}

export default SavedNewsCardList;
