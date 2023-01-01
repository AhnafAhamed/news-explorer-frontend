import { createContext, useContext, useEffect, useState } from "react";
import mainApi from "../utils/MainApi";

const ArticlesContext = createContext();



export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  function getArticles() {
    mainApi
      .getArticles()
      .then((data) => {
        setArticles(data);
        console.log({ data });
      })
      .catch((err) => {
        console.log({err});
      });
  }

  return (
    <ArticlesContext.Provider value={ {articles, getArticles} }>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticlesProvider () {
    return useContext(ArticlesContext);
}
