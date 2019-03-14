import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Loadable from 'react-loadable'

import Home from "./App";
import Items from "./Artikel/Items";
import Login from "./login/login.js";
import Profile from "./profile/Profile.js";
import Politik from "./Category/Politik";
import Sport from "./Category/Sport.js";
import Game from "./Category/Game.js";
import Ekonomi from "./Category/Ekonomi.js";
import PatNolPat from "./404/404.js";
// import Foot from "./Footer/Cobas";

const Child = Loadable( {
    loader: () => import('./Footer/Cobas' ),
    loading: () => <div>LOADING BOSS</div>
  });

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
            <Route exact path= "/footer/:source" component = {Child}/>
            <Route component = {PatNolPat}/>
        </Switch>
    )
}

export default MainRoute;
