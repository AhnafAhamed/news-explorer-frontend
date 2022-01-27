import "./NotFound.css";
import NotFoundSvg from "../../images/not-found.svg";

function NotFound() {
  return (
    <div className="not-found">
      <img src={NotFoundSvg} alt="" className="not-found__icon" />
      <h6 className="not-found__title">Nothing Found</h6>
      <p className="not-found__description">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
