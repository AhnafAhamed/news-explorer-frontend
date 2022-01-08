import "./PopupWithForm.css";
import Popup from "../Popup/Popup";

function PopupWithForm({
  title,
  label,
  inputType,
  inputPlaceholder,
  buttonText,
  redirectText,
}) {
  return (
    <Popup>
      <h6 className="popup-with-form__title">{title}</h6>
      <label className="popup-with-form__label">{label}</label>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className="popup-with-form__input"
      />
      <button className="popup-with-form__submit-button">{buttonText}</button>
      <p className="popup-with-form__redirect">or {redirectText}</p>
    </Popup>
  );
}

export default PopupWithForm;
