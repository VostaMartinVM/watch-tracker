import React from "react";
import "../css/Topbar.css";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">
      <a className="logo" href="#home">
        <p>WatchTracker</p>
      </a>

      <div className="search">
        <form action="/action_page.php">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            name="search"
          ></input>
          <button className="search-button" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="dropdown">
        <div className="dropdown-icon">
          <FaBars />
          <div className="dropdown-menu">
            <a href="#home">Link 1</a>
            <a href="#home">Link 2</a>
            <a href="#home">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
