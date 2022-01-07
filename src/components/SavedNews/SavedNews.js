import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews () {
    return (
        <div className="saved-news">
            <SavedNewsHeader/>
            <NewsCardList/>
        </div>
    )
}

export default SavedNews;