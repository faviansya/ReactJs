import React, { Component } from "react";
import Berita1 from "../images/berita2.jpg";

class Berita extends Component {
  render() {
    return (
      <div class="card mb-3">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-9">
              <img
                class="card-img-top w-100"
                src={Berita1}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title">Python Is The Best Language</h1>
          <p align="justify" class="card-text">
            Dengan menggunakan python kita bisa membuat berbagai jenis program
            dan alat yang kita inginkan. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
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
