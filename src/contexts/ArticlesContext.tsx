import { createContext, useContext, useState } from "react";
import mainApi from "../utils/MainApi";

const ArticlesContext = createContext({});



export function ArticlesProvider({ children }: { children: React.ReactNode } ) {
  const [articles, setArticles] = useState([]);

  function getArticles() {
    mainApi
      .getArticles()
      .then((data) => {
        setArticles(data);
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
