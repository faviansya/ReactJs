import React from 'react';
import PropTypes from "prop-types";

const Aside = () => {
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