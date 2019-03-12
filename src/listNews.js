import React, { Component } from 'react';
import PropTypes from "prop-types";

const listNews = props => {
    return (
      <div>
        <div className="card my-4">
          <img className="card-img-top" src={props.img} alt="Card image cap"/>
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.content}</p>
            <a href="#" className="btn btn-primary">Read More &rarr;</a>
          </div>
        </div>
      </div>
    )
  }
  
  listNews.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }
  
  export default listNews;