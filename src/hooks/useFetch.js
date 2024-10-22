import { useState, useEffect } from "react";

//Cache local
const localCache = {};

export const useFetch = (url = "") => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    //funcion que llama al endpoint
    getFetch(url);

    return () => {
      console.log("Cleanup");
    };
  }, [url]);

  const getFetch = async (url) => {
    //Si ya tengo la info en el cache, no hago la peticion
    if (localCache[url]) {
      setState({
        data: localCache[url],
        loading: false,
        error: null,
      });
      return;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        loading: false,
        error: null,
      });
      //Guardo la info en el cache
      localCache[url] = data;
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "No se pudo cargar la info",
      });
    }
  };

  return {
    ...state,
  };
};
