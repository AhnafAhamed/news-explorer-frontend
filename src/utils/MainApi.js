class MainApi {
    constructor(params) {
        this.baseUrl = params.baseUrl;
        this.headers = params.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject("Error")
    }


}

export default MainApi;