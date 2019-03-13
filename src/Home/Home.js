import React, { Component } from "react";
import "../css/App.css";
import Berita from "./Right.js";
import Aside from "./Aside.js";

class Home extends Component {
    render() {
        return (
            <div className="App">

                <div className="container-float m-3">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <Aside />
                        </div>
                        <div className="col-12 col-lg-8">
                            <Berita />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// export default withRouter(Home);

export default Home;
