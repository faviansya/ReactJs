import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div class="jumbotron jumbotron-fluid jumbotron-footer">
          <div class="container">
              <div class="row">
                  <div class="col-6">
                      <div class="footer-copyright">
                          <div>
                              <img class="footer-logo" src="assets/img/logo/logo-alterra-academy-plain.png" alt="browsermu rusak"/>
                          </div>
                          <div>
                              <p style={{fontSize:"12px"}}>© Copyright Alterra Group 2019</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-6 follow-Us">
                      <div class="followbro" style={{float:"right"}}>
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
                                      <span style={{fontSize: "12px"}}>Facebook</span>
                                  </div>
                              </div>
                              <div class="row col3">
                                  <div class="col-3">
                                      <span class="fa fa fa-twitter"></span>
                                  </div>
                                  <div class="col-3">
                                      <span style={{fontSize: "12px"}}>Twitter</span> </div>
                              </div>
                              <div class="row col3">
                                  <div class="col-3">
                                      <span class="fa fa-instagram"></span>
                                  </div>
                                  <div class="col-3">
                                      <span style={{fontSize: "12px"}}>Instagram</span> </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    );
  }
}

export default Footer;