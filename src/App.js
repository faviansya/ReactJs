import React, { Component } from 'react';
import './App.css';
import Header from './Include/Header.js';
import Footer from './Include/Footer.js';
import ListItem from './Include/ListItem.js';
import AllItem from './Include/listarticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListItem />
        <AllItem />
        <Footer />
      </div>
    );
  }
}

export default App;
