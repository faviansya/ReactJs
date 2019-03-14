import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import {withRouter} from "react-router-dom";


const Profile = props => {
    if(!props.is_login){
        return <Redirect to={{pathname:"/login"}} />;
    }
        return (
            <div className="App">
                <h1>PROFILE</h1>
                <p>E-Mail: {props.email}</p>
                <p>FULL NAME: {props.full_name}</p>
            </div>
        );
};
// export default withRouter(Profile);

export default connect(
    "is_login,email,full_name",
    actions
)(withRouter(Profile));