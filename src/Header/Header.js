import React, { Component } from 'react';
import logo from '../images/favicon.ico';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          <span> Kabar Reaksi</span>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to="/" className="nav-link"> Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/artikel" className="nav-link">Artikel</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Caegories
                      </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/categories/politik" className="nav-link">Politik</Link>
                <Link to="/categories/sport" className="nav-link">Sport</Link>
                <Link to="/categories/game" className="nav-link">Game</Link>
                <Link to="/categories/Ekonomi" className="nav-link">Ekonomi</Link>
              </div>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
            <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
            <Link to="/" onClick={()=> this.props.postSignout()} className="nav-link">Sign Out</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;