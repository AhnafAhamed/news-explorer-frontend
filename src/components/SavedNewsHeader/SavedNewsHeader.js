import "./SavedNewsHeader.css";

function SavedNewsHeader({ newsCards }) {
  function categories () {
    let categoryText = "";
    const categoriesList = newsCards.map((item) => {
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
        {newsCards.length === 0
          ? "You dont have any articles saved"
          : `Elise, you have ${newsCards.length} saved articles`}
      </h3>
      {newsCards.length === 0 ? (
        ""
      ) : (
        <div className="saved-news-header__description">
          <span className="saved-news-header__description_title">
            By Keywords:{" "}
          </span>
          <span className="saved-news-header__description_keywords">
            {/* Nature, Wild and 2 other */}
            {categories()}
          </span>
        </div>
      )}
    </div>
  );
}

export default SavedNewsHeader;
