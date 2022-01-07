import "./SavedNewsHeader.css";

function SavedNewsHeader() {
    return (
        <div className="saved-news-header">
            <p className="saved-news-header__title">Saved articles</p>
            <h3 className="saved-news-header__info">
            Elise, you have 5 saved articles
            </h3>
            <div className="saved-news-header__description">
                <span className="saved-news-header__description_title">By Keywords: </span>
                <span className="saved-news-header__description_keywords">Nature, Wild and 2 other</span>
            </div>
        </div>
    )
}

export default SavedNewsHeader;
