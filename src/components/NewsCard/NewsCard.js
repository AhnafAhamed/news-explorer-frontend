import "./NewsCard.css";
import image1 from "../../images/image_01.png";
import deleteIcon from "../../images/delete.svg";
import bookmarkIcon from "../../images/bookmark.svg";


function NewsCard() {
    return (
        <div className="news-card">
            <div className="news-card__image-container">
                <img src={image1} alt="" className="news-card__image" />
                <p className="news-card__tag">Nature</p>
                <img src={deleteIcon} alt="delete" className="news-card__icon news-card__icon_delete news-card__icon_hide" />
                <img src={bookmarkIcon} alt="bookmark" className="news-card__icon news-card__icon_bookmark" />
                <p className="news-card__action-prompt">Sign in to save articles</p>
            </div>
            <div className="news-card__text">
                <p className="news-card__date">November 4, 2020</p>
                <h6 className="news-card__heading">Everyone Needs a Special 'Sit Spot' in Nature</h6>
                <p className="news-card__description">
                Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having the world love woods
                </p>
                <p className="news-card__source">treehugger</p>
            </div>
        </div>
    )
}

export default NewsCard;
