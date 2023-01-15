import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

type SavedNewsProps = {
  savedNewsCards: Array<any>;
  isLoggedIn: boolean;
  userName: string;
};

function SavedNews({ savedNewsCards, isLoggedIn, userName }: SavedNewsProps) {
  return (
    <div className="saved-news">
      <SavedNewsHeader userName={userName} />

      {savedNewsCards.length === 0 ? (
        ""
      ) : (
        <SavedNewsCardList
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}

export default SavedNews;
