class MainApi {
  baseUrl: string;
  constructor(params: { baseUrl: string; }) {
    this.baseUrl = params.baseUrl;
  }

  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  _headers() {
    const token = localStorage.getItem("token");
    return {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }

  getArticles() {
    return fetch(this.baseUrl + "/articles", {
      method: "GET",
      headers: this._headers(),
    }).then((res) => this._checkResponse(res));
  }

  saveArticle({ keyword, title, text, date, source, link, image }: { keyword: string; title: string; text: string; date: string; source: string; link: string; image: string; }) {
    return fetch(this.baseUrl + "/articles", {
      method: "POST",
      headers: this._headers(),
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

  deleteArticle(articleId: string) {
    return fetch(this.baseUrl + `/articles/${articleId}`, {
      method: "DELETE",
      headers: this._headers(),
    }).then((res) => this._checkResponse(res));
  }
}

const mainApi = new MainApi({
  // baseUrl: "https://api.explore.students.nomoreparties.sbs",
  baseUrl: "http://localhost:3000",
});

export default mainApi;
