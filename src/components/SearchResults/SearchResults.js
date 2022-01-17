import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults( {isLoggedIn, newsCards, onLoadArticles}) {
    return (
        <div className="search-results">
            <h3 className="search-results__heading">Search Results</h3>
            <NewsCardList newsCards={newsCards} isLoggedIn={isLoggedIn}/>
        </div>
    )
}

export default SearchResults;
