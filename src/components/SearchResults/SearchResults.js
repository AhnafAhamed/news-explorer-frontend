import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults({ isLoggedIn, newsCards }) {
  console.log(typeof newsCards);
  return (
    <div className="search-results">
      <h3 className="search-results__heading">Search Results</h3>
      {Object.keys(newsCards).length === 0 ? (
        <p className="search-results__empty">Nothing found</p>
      ) : (
        <NewsCardList newsCards={newsCards} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
}

export default SearchResults;
