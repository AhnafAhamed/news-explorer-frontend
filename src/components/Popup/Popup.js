import "./Popup.css";

function Popup({ children, formName, isOpen, title }) {
  return (
    <div className={`popup popup__${formName} ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <h6 className="popup__title">{title}</h6>
        {children}
        <button className="popup__close-button"></button>
      </div>
    </div>
  );
}

export default Popup;
