class NewsApi {
  baseUrl: string;
  headers: { Authorization: string; };

  constructor(params: { baseUrl: string; headers: { Authorization: string; }; }) {
    this.baseUrl = params.baseUrl;
    this.headers = params.headers;
  }

  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  searchKeyword(keyword:string, date:string, currentDate:string) {
    return fetch(this.baseUrl + `/everything?q=${keyword}&pageSize=6&from=${date}&to=${currentDate}`, {
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