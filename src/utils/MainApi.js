class MainApi {
  constructor(params) {
    this.baseUrl = params.baseUrl;
    this.headers = params.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  getArticles() {
    return fetch(this.baseUrl + "/articles", {
      method: "GET",
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  }

  saveArticle({ keyword, title, text, date, source, link, image }) {
    return fetch(this.baseUrl + "/articles", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteArticle(articleId) {
    return fetch(this.baseUrl + `/articles/${articleId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this._checkResponse(res))

  }
}

const mainApi = new MainApi({
  // baseUrl: "https://api.explore.students.nomoreparties.sbs",
  baseUrl: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default mainApi;
