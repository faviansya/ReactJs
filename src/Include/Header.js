import React, { Component } from 'react';
import logo from '../images/favicon.ico';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="/">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
          <span> Kabar Reaksi</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Artikel</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Caegories
                      </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Politik</a>
                <a className="dropdown-item" href="#">Sport</a>
                <a className="dropdown-item" href="#">Game</a>
                <a className="dropdown-item" href="#">Ekonomi</a>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;