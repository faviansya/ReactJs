import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        </navbar>        <div class="Jumbotron-Utama">
          <div class="jumbotron jumbotron-main">
            <div class="container animated flipInX delay">
              <center>
                <div>
                  <img class="image-jumbotron" src="./assets/img/img/Profile-picture-Maria-1-200x200.jpg" alt="browsermu rusak" />
                </div>
                <div class="font-jumbotron">
                  <div>
                    <h1 class="h1editor">Faviansyah Arianda P</h1>
                  </div>
                  <div>
                    <i class="fa fa-map-marker" style={{ fontSize: "24px" }}></i>
                    <span style={{ fontSize: "13px" }}>Malang, east Java Indonesia</span>
                  </div>
                  <div>
                    <h2 style={{ fontSize: "20px", Margin: "19px", fontWeight: "semibold" }}>Front End Dev ,UI/UX and
                                Design</h2>
                  </div>
                  <div>
                    <a class="button btn btn-primary btn-lg button-jumbotron" href="/" role="Button" style={{ marginTop: "5px" }}>Download
                                CV</a>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
        <isi>
          <div data-aos="fade-up">

            <div class="isi-ukuran" id="boxmain">
              <div class="panel panel-default">
                <div class="container">
                  <div class="row" style={{ Margin: "30px" }}>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-12">
                          <h2>About Me</h2>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <p>Hi! I am <b>Hian Oliviera</b>, I work as a Front-end Developer at <c style={{ color: "orange" }}>Alterra
                                            Group</c>.</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <p>Front-end Developer are constructive work websites use HTML,CSS, and JavaScript.</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <p>Front-end Developer are the people who make it design and develop the design
                                        until become a website that can run.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-12">
                          <h2>Information</h2>
                        </div>
                        <table class="table">
                          <tr>
                            <td><b>Age</b></td>
                            <td>22th</td>
                          </tr>
                          <tr>
                            <td><b>Email</b></td>
                            <td>hian.oliviera@alterra.id</td>
                          </tr>
                          <tr>
                            <td><b>Address</b></td>
                            <td>Jl. Simpang Tambora I No. 9, Karang Besuki, Sukun, Malang 65146</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </isi>
        <footer>
          <div class="jumbotron jumbotron-fluid jumbotron-footer">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="footer-copyright">
                    <div>
                      <img class="footer-logo" src="assets/img/logo/logo-alterra-academy-plain.png" alt="browsermu rusak" />
                    </div>
                    <div>
                      <p style={{ fontSize: "12px" }}>© Copyright Alterra Group 2019</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 follow-Us">
                  <div class="followbro" style={{ float: "right" }}>
                    <div class="row">
                      <div class="col-12">
                        <b>
                          <p>Follow Us On</p>
                        </b>
                      </div>
                    </div>
                    <div>
                      <div class="row">
                        <div class="col-3">
                          <span class="fa fa-facebook-f"></span>
                        </div>
                        <div class="col-3">
                          <span style={{ fontSize: "12px" }}>Facebook</span>
                        </div>
                      </div>
                      <div class="row col3">
                        <div class="col-3">
                          <span class="fa fa fa-twitter"></span>
                        </div>
                        <div class="col-3">
                          <span style={{ fontSize: "12px" }}>Twitter</span> </div>
                      </div>
                      <div class="row col3">
                        <div class="col-3">
                          <span class="fa fa-instagram"></span>
                        </div>
                        <div class="col-3">
                          <span style={{ fontSize: "12px" }}>Instagram</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;