import React, { Component } from "react";
import Beritas from "../images/berita1.jpeg";

class Berita extends Component {
  render() {
    return (
      <div class="card mb-3">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-9">
              <img
                class="card-img-top w-100"
                src={Beritas}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title">Ikuti BootCamp Alphatech Academy</h1>
          <p align="justify" class="card-text">
            Kini Alpatech Memberikan kesempatan bagi non IT untuk mengikuti
            bootcamp. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p class="card-text">
            <small class="text-muted">Posted By: Vian</small>
            <small class="text-muted">, Edited 3 Minutes Ago</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Berita;
