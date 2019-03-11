import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <navbar>
        <div className="navbarUtama shadow-sm bg-white rounded">
          <div className="container">
            <div>
              <div className="row">
                <div className="col-6">
                  <div className="logoalteraatas"><img src="assets/img/logo/logo-alterra-academy.png" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li><a href="#" className="currentLink" style={{ textDecoration: "none" }}>ABOUT</a></li>
                    <li><a href="Gallery.html" style={{ textDecoration: "none" }}>GALLERY</a></li>
                    <li><a href="contact.html" style={{ textDecoration: "none" }}>CONTACT</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </navbar>

    );
  }
}

export default Header;