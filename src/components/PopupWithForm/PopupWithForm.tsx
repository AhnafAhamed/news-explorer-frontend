import React, { useState } from "react";
import "./PopupWithForm.css";
import Popup from "../Popup/Popup";

type PopupWithFormProps = {
  title: string,
  buttonText: string,
  redirectText: string,
  initialValues: any,
  children: React.ReactNode,
  formSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  popupName: string,
  isOpen: boolean,
  closeButtonClick: () => void,
  onRedirectClick: () => void,
  closeOnOverlayClick: () => void,
}

export const FormContext = React.createContext({
  form: {},
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
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
}: PopupWithFormProps) {
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
