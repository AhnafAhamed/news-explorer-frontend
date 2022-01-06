import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
    return (
        <div>
            <div className="news-card-list">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
            <button className="news-card-list__button">Show more</button>
        </div>
    )
}

export default NewsCardList;
