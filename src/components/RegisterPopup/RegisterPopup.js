import { useState } from "react";
import Popup from "../Popup/Popup";

function RegisterPopup({ isOpen, closeButtonClick, closeOnOverlayClick, onRedirectClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <Popup
      popupName="register"
      isOpen={isOpen}
      title="Sign up"
      closeButtonClick={closeButtonClick}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <form className="popup__form">
        <label className="popup__input-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email || ""}
          onChange={handleEmailChange}
          placeholder="Enter email"
          minLength="2"
          maxLength="40"
          className="popup__input"
          required
        />
        <label className="popup__input-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password || ""}
          onChange={handlePasswordChange}
          placeholder="Enter password"
          minLength="8"
          maxLength="40"
          className="popup__input"
          required
        />
        <label className="popup__input-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name || ""}
          onChange={handleNameChange}
          placeholder="Enter username"
          minLength="2"
          maxLength="40"
          className="popup__input"
          required
        />
        <button type="submit" className="popup__submit-button">
          Submit
        </button>
      </form>
      <p className="popup__redirect" onClick={onRedirectClick}>
        or{" "}
        <span
          className="popup__redirect-text"
          
        >
          Sign in
        </span>
      </p>
    </Popup>
  );
}

export default RegisterPopup;
