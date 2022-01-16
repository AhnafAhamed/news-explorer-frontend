import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({isLoggedIn}) {
    return (
        <div>
            <div className="news-card-list">
                <NewsCard isLoggedIn={isLoggedIn}/>
                <NewsCard isLoggedIn={isLoggedIn}/>
                <NewsCard isLoggedIn={isLoggedIn}/>
            </div>
            <button className="news-card-list__button">Show more</button>
        </div>
    )
}

export default NewsCardList;
