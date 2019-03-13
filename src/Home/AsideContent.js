import React from 'react';
import PropTypes from "prop-types";

const Aside = props => {
    return (
        <div >
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                <span className="badge badge-info">#{props.key}</span>
                <div className="w-100 justify-content-between">
                    <h5 className="mb-1">{props.title}</h5>
                    <small>1 days ago</small>
                </div>
                <small>Diposting Oleh: Vian</small>
            </a>
        </div >
    );
};

Aside.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Aside;