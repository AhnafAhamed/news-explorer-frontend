import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

function SavedNews({ savedNewsCards, isLoggedIn, userName }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader userName={userName} newsCards={savedNewsCards} />

      {savedNewsCards.length === 0 ? (
        ""
      ) : (
        <SavedNewsCardList
          savedNewsCards={savedNewsCards}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}

export default SavedNews;
