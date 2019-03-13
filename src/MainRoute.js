import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Home from "./App";
import Items from "./Artikel/Items";
import Login from "./login/login.js";
import Profile from "./profile/Profile.js";
import Politik from "./Category/Politik";
import Sport from "./Category/Sport.js";
import Game from "./Category/Game.js";
import Ekonomi from "./Category/Ekonomi.js";

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/artikel" component = {Items}/>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/profile" component = {Profile}/>
            <Route exact path = "/categories/politik" component = {Politik}/>
            <Route exact path = "/categories/sport" component = {Sport}/>
            <Route exact path = "/categories/Game" component = {Game}/>
            <Route exact path = "/categories/ekonomi" component = {Ekonomi}/>

        </Switch>
    )
}

export default MainRoute;
