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
}) {
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };
  return (
    <Popup onSubmit={formSubmit}>
      <h6 className="popup-with-form__title">{title}</h6>
      <form action="POST" className="popup-with-form__form">
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
        <button type="submit" className="popup-with-form__submit-button">
          {buttonText}
        </button>
      </form>

      <p className="popup-with-form__redirect">or {redirectText}</p>
    </Popup>
  );
}

export default PopupWithForm;
