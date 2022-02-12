import { useEffect, useRef, useState } from "react";
import Popup from "../Popup/Popup";

function LoginPopup({
  isOpen,
  closeButtonClick,
  closeOnOverlayClick,
  onRedirectClick,
  onUserLogin,
  isLoginError
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUserLogin({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    setFormErrors({ email: "", password: "" });
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
      default:
        break;
    }
  }

  return (
    <Popup
      popupName="register"
      isOpen={isOpen}
      title="Sign in"
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
          onChange={handleChange}
          onBlur={updateFormErrors}
          placeholder="Enter email"
          className="popup__input"
          required
        />
        <p className="popup__input-error-text">{formErrors.email}</p>
        <label className="popup__input-label">Password</label>
        <input
          type="password"
          name="password"
          value={password || ""}
          onChange={handleChange}
          onBlur={updateFormErrors}
          placeholder="Enter password"
          minLength="8"
          maxLength="40"
          className="popup__input"
          required
        />
        <p className="popup__input-error-text">{formErrors.password}</p>
        {isLoginError ? (
          <p className="popup__error-text">Couldn't log in</p>
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
        or <span className="popup__redirect-text">Sign up</span>
      </p>
    </Popup>
  );
}

export default LoginPopup;
