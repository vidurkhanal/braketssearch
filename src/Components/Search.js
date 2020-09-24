import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons }) {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const [{ term }, dispatch] = useStateValue();
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: search,
    });
  };
  return (
    <div className="searchBox">
      <form className="search">
        <div className="searchBox__input">
          {/* Search Icon */}
          <SearchIcon className="searchBox__searchIcon" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {hideButtons ? (
          <div className="searchBox__buttonsHidden">
            <button
              className="search-button"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        ) : (
          <div className="searchBox__buttons">
            <button
              className="search-button"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Search;
