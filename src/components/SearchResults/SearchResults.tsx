import NewsCardList from "../NewsCardList/NewsCardList";
import NotFound from "../NotFound/NotFound";
import "./SearchResults.css";

type SearchResultsProps = {
  isLoggedIn: boolean;
  newsCards: Array<any>;
  keyword: string;
};

function SearchResults({ isLoggedIn, newsCards, keyword }: SearchResultsProps) {
  return (
    <div className="search-results">
      { Object.keys(newsCards).length === 0 ? '' : <h3 className="search-results__heading">Search Results</h3>}
      {Object.keys(newsCards).length === 0 ? (
        <NotFound/>
      ) : (
        <NewsCardList newsCards={newsCards} isLoggedIn={isLoggedIn} keyword={keyword}  />
      )}
    </div>
  );
}

export default SearchResults;
