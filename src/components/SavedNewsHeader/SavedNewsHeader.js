import "./SavedNewsHeader.css";
import { useArticlesProvider } from "../../contexts/ArticlesContext";

function SavedNewsHeader({ userName }) {
  const { articles } = useArticlesProvider();
  function categories () {
    let categoryText = "";
    const categoriesList = articles.map((item) => {
      return item.keyword
    })
    if(categoriesList.length > 2) {
      categoryText = categoriesList.slice(0,2).join(', ') + ' and ' + categoriesList.slice(2).length + ' others'
    } else {
      categoryText = categoriesList.join(', ')
    }
    return categoryText
  }
  return (
    <div className="saved-news-header">
      <p className="saved-news-header__title">Saved articles</p>
      <h3 className="saved-news-header__info">
        {articles.length === 0
          ? "You dont have any articles saved"
          : `${userName}, you have ${articles.length} saved articles`}
      </h3>
      {articles.length === 0 ? (
        ""
      ) : (
        <div className="saved-news-header__description">
          <span className="saved-news-header__description_title">
            By Keywords:{" "}
          </span>
          <span className="saved-news-header__description_keywords">
            {categories()}
          </span>
        </div>
      )}
    </div>
  );
}

export default SavedNewsHeader;
