import React, { Component } from "react";
import Berita1 from "../images/berita1.jpeg";
import Berita2 from "../images/berita2.jpg";
import Berita3 from "../images/berita3.jpg";
import Berita4 from "../images/berita4.png";

class Footer extends Component {
  render() {
    return (
        <li className="list-group-item bg-light">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </li>
    );
  }
}

export default Footer;
