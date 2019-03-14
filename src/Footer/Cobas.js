import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/footer/netflix">net</Link>
          {/* <Route path="/footer/:id" component={Child} /> */}
          {this.props.match.params.source}
        </div>
      </Router>
    );
  }
}

export default Footer;
