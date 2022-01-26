import React, { useState } from "react";
import "./PopupWithForm.css";
import Popup from "../Popup/Popup";

export const FormContext = React.createContext({
  form: {},
});

function PopupWithForm({
  title,
  buttonText,
  redirectText,
  initialValues,
  children,
  formSubmit,
  popupName,
  isOpen,
  closeButtonClick,
  onRedirectClick,
  closeOnOverlayClick,
}) {
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };
  return (
    <Popup
      closeOnOverlayClick={closeOnOverlayClick}
      closeButtonClick={closeButtonClick}
      title={title}
      isOpen={isOpen}
      onSubmit={formSubmit}
      popupName={popupName}
    >
      <form action="POST" className="popup__form">
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
        <button type="submit" className="popup__submit-button">
          {buttonText}
        </button>
      </form>

      <p className="popup__redirect">
        or{" "}
        <span
          className="popup__redirect-text"
          onClick={onRedirectClick}
        >
          {redirectText}
        </span>
      </p>
    </Popup>
  );
}

export default PopupWithForm;
