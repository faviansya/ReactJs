import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email")
    const full_name = localStorage.getItem("full_name")
    if(is_login === null){
        return <Redirect to={{pathname:"/login"}} />;
    }
        return (
            <div className="App">
                <h1>PROFILE</h1>
                <p>E-Mail: {email}</p>
                <p>FULL NAME: {full_name}</p>
            </div>
        );
};
// export default withRouter(Profile);

export default Profile;