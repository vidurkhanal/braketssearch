import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../Logo.png";
import Search from "../Components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        {/* header left */}
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
        </div>
        {/* header right */}
        <div className="home__headerRight">
          <a href="https://braket-store.web.app/">Store</a>
          <div className="appicon">
            <AppsIcon />
          </div>
          <div className="avataricon">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <div className="home__body">
        <img src={logo} alt="" />
        <Search />
      </div>
    </div>
  );
}

export default Home;
