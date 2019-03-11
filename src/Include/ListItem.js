import React, { Component } from 'react';
import Aside from './Aside.js';
import Berita from "./Berita1.js";
import ListArticle from "./listarticle.js";

class Footer extends Component {
  render() {
    return (
      <div className="container-float m-3">
      <div className="row">
        <div className="col-12 col-lg-4">
        <Aside/>
        </div>
        <div className="col-12 col-lg-8">
        <Berita/>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;

// class Footer extends Component {
//   render() {
//     return (
//       <div className="container-float m-3">
//       <div className="row">
//         <div className="col-12">
//         <ListArticle/>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

// export default Footer;