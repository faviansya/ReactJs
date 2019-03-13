import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
        <li className="list-group-item bg-light">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange ={this.props.doSearch}
            />
          </form>
        </li>
    );
  }
}

export default Search;
