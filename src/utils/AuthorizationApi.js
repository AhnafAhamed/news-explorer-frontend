class AuthorizationApi {
  constructor() {
    this.baseUrl = "https://api.explore.students.nomoreparties.sbs";
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  registerUser({ name, email, password }) {
    return fetch(this.baseUrl + "/signup", {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }).then((res) => this._checkResponse(res)),
    });
  }
}

export default AuthorizationApi
