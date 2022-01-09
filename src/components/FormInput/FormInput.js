import { useContext } from "react";
import { FormContext } from "../PopupWithForm/PopupWithForm";
import "./FormInput.css";

function FormInput({ label, type, name, placeholder }) {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="form-input">
      <label className="form-input__label">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        placeholder={placeholder}
        onChange={handleFormChange}
        className="form-input__input"
      />
    </div>
  );
}

export default FormInput;
