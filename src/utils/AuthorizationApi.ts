class AuthorizationApi {
  baseUrl: string;
  headers: { Accept: string; "Content-Type": string; };
  constructor() {
    // this.baseUrl = "https://api.explore.students.nomoreparties.sbs";
    this.baseUrl = "http://localhost:3000";
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  registerUser({ name, email, password }: { name: string, email: string, password: string }) {
    return fetch(this.baseUrl + "/signup", {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }).then((res) => this._checkResponse(res))
  }

  authorizeUser({ email, password }: { email: string, password: string }) {
    return fetch(this.baseUrl + "/signin", {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
    .then((res) => this._checkResponse(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    })
  }

  checkUserToken() {
    const userToken = localStorage.getItem("token");
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`,
      }
    })
    .then(data => data)
    .then((res) => this._checkResponse(res))
  }
}

const AuthApi = new AuthorizationApi();

export default AuthApi;
