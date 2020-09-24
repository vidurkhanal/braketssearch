import React from "react";
import { useStateValue } from "../StateProvider";
import useSearch from "../useSearch";
import "./result.css";
import Search from "../Components/Search";
import { Link } from "react-router-dom";

function Result() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useSearch(term); // LIVE ENGINE
  console.log(data);
  return (
    <div className="result">
      <div className="result__header">
        <Link to="/">
          <div className="logo">
            <h1>Search Results for {term}</h1>
          </div>
        </Link>
        <div className="result__headerBody">
          <Search hideButtons />
        </div>
      </div>
      {term && (
        <div className="result__results">
          {data?.items.map((item) => (
            <div className="result__resultItem">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap.cse_image[0].src && (
                    <img
                      src={item.pagemap.cse_image[0].src}
                      alt="Page Icon"
                      className="result__resultItemImage"
                    />
                  )}
                {item.displayLink}
                <h2 className="result__resultItemTitle">{item.title}</h2>
              </a>
              <p className="result__resultItemSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;
