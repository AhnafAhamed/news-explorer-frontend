import "./Popup.css";

function Popup({
  children,
  formName,
  isOpen,
  title,
  closeButtonClick,
  closeOnOverlayClick,
}) {
  return (
    <div
      onClick={closeOnOverlayClick}
      className={`popup popup__${formName} ${isOpen ? "popup_open" : ""}`}
    >
      <div className="popup__container">
        <h6 className="popup__title">{title}</h6>
        {children}
        <button
          onClick={closeButtonClick}
          className="popup__close-button"
        ></button>
      </div>
    </div>
  );
}

export default Popup;
