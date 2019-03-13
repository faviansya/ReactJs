import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  return (
    <div>
      <a
        href="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <img width="300px" src={props.img} alt="Card image cap" /> <br />
        <span className="badge badge-info">New</span>
        <div className=" w-100 justify-content-between">
          <h5 className="mb-1">{props.title}</h5>
          <small className="text-muted">2 days ago</small>
        </div>
        <p class="mb-1">
          {props.content}
        </p>
        <small className="text-muted">Diposting Oleh: Vian</small>
      </a>
      <a
        href="#"
        className="list-group-item list-group-item-action text-info bg-light"
      >
        Back To Home
      </a>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Footer;
