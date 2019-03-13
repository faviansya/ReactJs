import React, { Component } from "react";

class Berita extends Component {
  render() {
    return (
      <div class="card mb-3">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-9">
              <img
                class="card-img-top w-100"
                src={this.props.img}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title">{this.props.title}</h1>
          <p align="justify" class="card-text">
          {this.props.content}
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
