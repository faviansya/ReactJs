
import React, { Component } from 'react';
import MainRoute from './MainRoute.js';
import { withRouter } from 'react-router-dom';

import Header from "./Header/Header.js";
import Footer from "./Footer/Footer";

class Apps extends Component{
    postSignout = () =>{
        localStorage.removeItem("is_login");
        this.props.history.push("/");
    }
    render(){
        return (
            <div className= "app">
                <Header postSignout = {this.postSignout} />
                <MainRoute/>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Apps);
