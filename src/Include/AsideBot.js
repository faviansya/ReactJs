import React, { Component } from 'react';
import Berita1 from "../images/berita1.jpeg";
import Berita2 from "../images/berita2.jpg";
import Berita3 from "../images/berita3.jpg";
import Berita4 from "../images/berita4.png";
import PropTypes from "prop-types";

const Aside = props => {
  return (
    <div >
    <a href="#" className="list-group-item list-group-item-action text-info bg-light">Lihat Semua</a>
</div >
  );
};

Aside.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Aside;