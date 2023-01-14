import "./Popup.css";

type PopupProps = {
  children: React.ReactNode;
  popupName: string;
  isOpen: boolean;
  title: string;
  closeButtonClick: () => void;
  closeOnOverlayClick: () => void;
}

function Popup({
  children,
  popupName,
  isOpen,
  title,
  closeButtonClick,
  closeOnOverlayClick,
}: PopupProps) {
  return (
    <div
      onClick={closeOnOverlayClick}
      className={`popup popup_type_${popupName} ${isOpen ? "popup_open" : ""}`}
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
