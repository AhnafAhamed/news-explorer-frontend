import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({isLoggedIn}) {
    const route = useLocation();
    return (
        <div>
            <div className="news-card-list">
                <NewsCard isLoggedIn={isLoggedIn}/>
                <NewsCard isLoggedIn={isLoggedIn}/>
                <NewsCard isLoggedIn={isLoggedIn}/>
            </div>
            { route.pathname === "/" ? <button className="news-card-list__button">Show more</button> : ''}
        </div>
    )
}

export default NewsCardList;
