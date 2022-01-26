class NewsApi {
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

  searchKeyword(keyword, date, currentDate) {
    return fetch(this.baseUrl + `/everything?q=${keyword}&pageSize=100&from=${date}&to=${currentDate}`, {
      headers: this.headers,
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }
}

const newsApi = new NewsApi({
    baseUrl: "https://newsapi.org/v2",
    headers: {
        "Authorization": "a16041ac69544fac8518640ef112b8f7"
    }
})

export default newsApi;