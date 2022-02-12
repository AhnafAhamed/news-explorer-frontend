import { useEffect, useRef, useState } from "react";
import Popup from "../Popup/Popup";

function RegisterPopup({
  isOpen,
  closeButtonClick,
  closeOnOverlayClick,
  onRedirectClick,
  onRegisterUser,
  isRegistrationError,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onRegisterUser({
      name: name,
      email: email,
      password: password,
    });
    setTimeout(() => {
      setEmail("");
      setPassword("");
      setName("");
    }, 1500);
  }

  useEffect(() => {
    setFormErrors({ email: "", password: "", name: "" });
  }, [isOpen]);

  function checkFormValidity(e) {
    setIsValid(formRef.current.checkValidity());
  }

  function updateFormErrors(e) {
    const { name, validationMessage } = e.target;
    setFormErrors({
      ...formErrors,
      [name]: validationMessage,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    formErrors[name] && updateFormErrors(e);

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "name":
        setName(value);
        break;
      default:
        break;
    }
  }

  return (
    <Popup
      popupName="register"
      isOpen={isOpen}
      title="Sign up"
      closeButtonClick={closeButtonClick}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <form
        className="popup__form"
        action="POST"
        onSubmit={handleSubmit}
        onChange={checkFormValidity}
        ref={formRef}
        noValidate
      >
        <label className="popup__input-label">Email</label>
        <input
          type="email"
          name="email"
          value={email || ""}
          placeholder="Enter email"
          minLength="2"
          maxLength="40"
          className="popup__input"
          onChange={handleChange}
          onBlur={updateFormErrors}
          required
        />
        <p className="popup__input-error-text">{formErrors.email}</p>
        <label className="popup__input-label">Password</label>
        <input
          type="password"
          name="password"
          value={password || ""}
          placeholder="Enter password"
          minLength="8"
          maxLength="40"
          className="popup__input"
          onChange={handleChange}
          onBlur={updateFormErrors}
          required
        />
        <p className="popup__input-error-text">{formErrors.password}</p>
        <label className="popup__input-label">Name</label>
        <input
          type="text"
          name="name"
          value={name || ""}
          placeholder="Enter username"
          minLength="2"
          maxLength="40"
          className="popup__input"
          onChange={handleChange}
          onBlur={updateFormErrors}
          required
        />
        <p className="popup__input-error-text">{formErrors.name}</p>
        {isRegistrationError ? (
          <p className="popup__error-text">Couldn't sign up</p>
        ) : (
          ""
        )}
        <button
          disabled={!isValid}
          type="submit"
          className="popup__submit-button"
        >
          Submit
        </button>
      </form>
      <p className="popup__redirect" onClick={onRedirectClick}>
        or <span className="popup__redirect-text">Sign in</span>
      </p>
    </Popup>
  );
}

export default RegisterPopup;
