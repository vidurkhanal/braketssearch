import { useState, useEffect } from "react";
import API_KEY from "./keys";
const searchEngineID = "id";

const useSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${searchEngineID}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.warn(error.message));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useSearch;
