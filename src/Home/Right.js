import React, { Component } from "react";
import Berita from "./Berita.js";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import "../css/App.css";
import { connect } from 'unistore/react';
import { actions } from '../store';


class Home extends Component {
    
    componentDidMount = () => {
        this.props.GetBerita().then(
            () => {
                console.log(this);
                console.log("MASOKKKKKKKKKk Right");
            }
        )
    };
    render() {
        const { listNews1 } = this.props;
        return (
            <div>

                {listNews1.map((item, key) => {
                    const arc_img =
                        item.urlToImage === null ? "Kosong" : item.urlToImage;
                    const content = item.content !== null ? item.content : "";
                    return (
                        <Berita
                            key={key}
                            title={item.title}
                            img={arc_img}
                            content={content}
                        />
                    );
                })}
            </div>
        );
    }
}
// export default withRouter(Home);

export default connect(
    'listNews1', actions
)(withRouter(Home));



    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listNews1: [],
    //         username: "",
    //         isLogin: false
    //     };
    // }

    // componentDidMount = () => {
    //     const self = this;
    //     axios
    //         .get(urlHeadLine1)
    //         .then(function (response) {
    //             self.setState({ listNews1: response.data.articles });

    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };