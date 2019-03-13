import React, { Component } from "react";
import "../css/App.css";
import Berita from "./Berita.js";
import axios from "axios";

const apiKey = "062ea71e9c4b49fba5b9015130ffaaf9";
const baseURL = "https://newsapi.org/v2/";

const urlHeadLine1 =
    baseURL +
    "top-headlines?" +
    "country=id" +
    "&pageSize=1" +
    "&apiKey=" +
    apiKey;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews1: [],
            username: "",
            isLogin: false
        };
    }

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadLine1)
            .then(function (response) {
                self.setState({ listNews1: response.data.articles });

                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const { listNews1 } = this.state;
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

export default Home;
